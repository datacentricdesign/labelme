import { Component, Inject, PLATFORM_ID, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Thing, Property, PropertyType } from '../classes';
import { Router } from '@angular/router';
import { HttpClientService } from '../http-client.service';
import { isPlatformServer } from '@angular/common';

//Dialogues
import { DialogJWTComponent } from '../dialogs/dialog-jwt/dialog-jwt.component';
import { DialogAddThingComponent } from '../dialogs/dialog-add-thing/dialog-add-thing.component';
import { DialogAddPemComponent } from '../dialogs/dialog-add-pem/dialog-add-pem.component';
import { DialogAddPropertyComponent } from '../dialogs/dialog-add-property/dialog-add-property.component';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css'],
})
export class ThingsComponent implements OnInit {
  things: Thing[] = [];
  add_property_thing: Thing;
  add_pem_thing: Thing;
  displayedColumns: string[] = ['name', 'type', 'settings'];
  display_property: boolean = false;
  property_picked: Property = new Property({});

  constructor(
    private router: Router,
    private service: HttpClientService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      console.log('Init Things component server');
    } else {
      this.BrowserUniversalInit();
    }
  }

  BrowserUniversalInit() {
    console.log('Init Home component browser');
    this.FillArrayThings();
  }

  FillArrayThings(): void {
    this.service.get('api/things').subscribe((data) => {
      data['things'].forEach((thing) => {
        this.service.get('api/things/' + thing.id).subscribe((data) => {
          this.things.push(new Thing(data['thing']));
        });
      });
    });
  }

  descriptionT(thing: Thing): string {
    if (thing.description) {
      return thing.description;
    } else {
      return 'No description available';
    }
  }

  descriptionP(property: Property): string {
    if (property.description) {
      return property.description;
    } else {
      return 'No description available';
    }
  }

  HasProperty(thing: Thing): boolean {
    return thing.properties.length > 0;
  }

  async setChild(property: Property) {
    this.property_picked = property;
  }

  showDialog_property(property: Property) {
    this.setChild(property).then(() => (this.display_property = true));
  }

  delete_thing(thing: Thing) {
    if (confirm('Delete ' + thing.name + ' ?')) {
      this.service.delete('api/things/' + thing.id).subscribe((data) => {
        window.location.reload(); // TODO make a reload req ?
      });
    }
  }

  delete_property(property: Property) {
    if (confirm('Delete ' + property.name + ' ?')) {
      this.service
        .delete(
          'api/things/' + property.entity_id + '/properties/' + property.id
        )
        .subscribe((data) => {
          window.location.reload(); //TODO make a reload req ?
        });
    }
  }

  nav_thing(thing: Thing) {
    this.router.navigate(['/page/thing'], {
      state: { data: thing.json() },
    });
  }

  add_thing(thing: Thing) {
    this.service.post('api/things', thing.json()).subscribe((data) => {
      const newthing: Thing = new Thing(data['thing']);
      this.things.push(newthing);
      const jwt: string = data['thing'].keys.jwt;
      this.openDialogJWT(newthing, jwt);
    });
  }

  openDialogJWT(thing: Thing, jwt: string): void {
    const dialogRef = this.dialog.open(DialogJWTComponent, {
      width: '250px',
      data: { thing: thing, jwt: jwt },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  openDialogAddThing(): void {
    const dialogRef = this.dialog.open(DialogAddThingComponent, {
      width: '250px',
      data: { name: '', type: '', description: '', pem: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.add_thing(
          new Thing({
            name: result.name,
            type: result.type,
            description: result.description,
            pem: result.pem,
          })
        );
      }
    });
  }

  openDialogAddPem(thing: Thing): void {
    const dialogRef = this.dialog.open(DialogAddPemComponent, {
      data: { pem: '', thing: thing },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addPem(result.pem, result.thing);
      }
    });
  }

  addPem(pKey: String, thing: Thing) {
    const key =
      '-----BEGIN PUBLIC KEY-----' +
      '\n' +
      pKey +
      '\n' +
      '-----END PUBLIC KEY-----';
    console.log(key);

    this.service
      .put('api/things/' + thing.id + '/pem', { pem: key })
      .subscribe((data) => {
        console.log(data);
      });
  }

  openDialogAddProperty(thing: Thing): void {
    this.add_property_thing = thing;
    const dialogRef = this.dialog.open(DialogAddPropertyComponent, {
      width: '250px',
      data: { name: '', type: '', description: '', thing: thing },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.add_property({
          name: result.name,
          type: result.type,
          description: result.description,
        });
      }
    });
  }

  add_property(property: {}) {
    this.service
      .post(
        'api/things/' + this.add_property_thing.id + '/properties',
        property
      )
      .subscribe((data) => {
        this.add_property_to_things(
          data['property'].entityId,
          new Property(data['property'])
        );
      });
  }

  add_property_to_things(thing_id: string, property: Property) {
    this.things.forEach((t) => {
      if (thing_id == t.id) {
        t.properties.push(property);
        console.log(property);
      }
    });
  }

  export_data(property: Property) {
    this.service
      .getCSV(
        'api/things/' +
          property.entity_id +
          '/properties/' +
          property.id +
          '?from=0' +
          '&to=' +
          new Date().getTime() +
          '000'
      )
      .subscribe((data) => {
        console.log(data.headers);
        console.log(data);
        this.exportToCsv(property.name, data);
      });
  }

  private exportToCsv(filename: string, rows: any) {
    if (!rows) {
      console.log('Undefined ' + rows);
      return;
    }

    const csvContent = rows['property'].values.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv; charset=utf-8;' });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename + '.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
}
