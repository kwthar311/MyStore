# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.
<br>

<h2>Brief Description</h2><br>
this project contain three modules<br>
1- Cart module<br>
2-Product module<br>
3-Shared module<br>

 <h3>Cart module</h3><br>
this module contain two folders<br>
1-<h4>Components</h4><br>
  <span>&nbsp;</span>     cart component<br>
this component responsible for display all products that exist in cart<br>
     <span>&nbsp;</span>    Success commponent<br>
this thi component responsible for success message the appear when customer click submit button<br>
   <span>&nbsp;</span>      form component<br>
this component responsible for displaying the form and its validations<br>

2- <h4>services</h4><br>
contain cart service that contain Addfunction that used in button Add which exist in listproduct and Add button in details page to Add product in cart <br>

<h3>Product module</h3><br>
1-<h4>Components</h4><br>
productlist component<br>
      <span>&nbsp;</span>   this this component responsible for  displaying all products<br>
product component<br>
    <span>&nbsp;</span>  this this component responsible for  the card product <br>
productdtail component<br>
     <span>&nbsp;</span>   this this component responsible for displaying product details when 
    you click on the product image to learn more about this product<br>
2-<h4>services</h4><br>
product service<br>
   <span>&nbsp;</span>  this service toi read the product data from json file and return observable for subscribers
3-<h4>Models</h4><br>
product interface<br>

<h3>Shared module</h3><br>
1-<h4>Components</h4><br>
     <span>&nbsp;</span>  contain header component
2-<h4>services</h4><br>
  <span>&nbsp;</span>  contain success service to share data from different components
   
   


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
