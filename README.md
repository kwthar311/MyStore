# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

#Brief Description
this project contain three modules
1- Cart module
2-Product module
3-Shared module

#Cart module 
this module contain two folders
1-Components:
       cart component
this component responsible for display all products that exist in cart
       Success commponent
this thi component responsible for success message the appear when customer click submit button
       form component
this component responsible for displaying the form and its validations

2-services:
contain cart service that contain Addfunction that used in button Add which exist in listproduct and Add button in details page to Add product in cart 

#Product module
1-Components:
productlist component
     this this component responsible for  displaying all products
product component
   this this component responsible for  the card product 
productdtail component
    this this component responsible for displaying product details when 
    you click on the product image to learn more about this product
2-services:
product service
   this service toi read the product data from json file and return observable for subscribers
3-Models
product interface

#Shared module
1-Components: 
      contain header component
2-services:
   contain success service to share data from different components
   
   


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
