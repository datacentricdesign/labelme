# Labelme

LabelMe is a tool to label data collected through DCD-hub api for machine learning application or algorithm to use.
The tool is developed using [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

# First-thing-First: Installation:

## Installing NodeJS :

Before we begin we have to install npm package manager and NodeJS. This two can be installed in one step.

Go to [nodejs.org]("https://nodejs.org") and install the latest LTS version of the NodeJS. This installation will also include npm package manager automatically.

## Installing Angular

After installing npm package manager and NodeJs, We also have to install angular in our machine.

To do that simply, open your terminal / command line and type `npm install -g @angular/cli`.

This will install an angular CLI into your machine to create new angular project and other angular related functionalities like components /service / pipe etc.

For more information about the angular app development, visit Angulars' [Getting Started](https://angular.io) page.

# Downloading and installing LabelMe project

Now as we have Angular and NodeJS install, lets start using our Label me project.

1. Download the repository from [github](https://github.com/datacentricdesign/labelme) and open it in your favorite IDE in your machine.
2. Open terminal/command line in your machine and navigate to the 'LabelMe Project' local github repository. (If you use VS Code you can skep the project navigation folder step and directly open terminal in the VS Code from `Terminal > New Terminal`.)
3. Now Run `npm install` into the terminal to install all the necessary dependency to run our project.

For the first time it will take couple of minutes to install and compile all the necessary libraries. From next run it should be quicker

## Run Development server / Run angular app

Once the installation finish:

1. Run `npm run start` in the terminal to start a dev server.
2. and then Navigate to `http://localhost:4200/` in your browser. You will see that our angular app up and running in your local machine.

The app will automatically reload if you change any of the source files in your code editor.

## Generating new component / service / pipe

To better code structure, we put all the newly generated component inside the 'components' folder.

To create new component in the /components folder: Run `ng generate component components/component-name` in your terminal.
This will create a folder named as your component with its HTML

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module` to create particular service (e.g http-client) / pipe / interface / class.

## Build

To build our project: Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

To run the unit test on the project: Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Explaining Code Structure
