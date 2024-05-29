# TabitWorkspaceTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1. Because the task required angular 17, i downgrade packages. Also, <ins>Angular module-federation doesn't have support for Angular 18</ins>.

## Project structure
- mf-app Angular application with UI
- host-app Shell app with angular. There we have navigation and initialization for each APP
- myLoginApp External Angular application in separate app

## Task Project Structure:
1. Host Application: This application acts as the container and manages the overall
   layout. It will house the shared components.
2. Microfrontend 1 (MFE 1): This microfrontend focuses on a specific functionality with
   its own UI and local state.
3. Microfrontend 2 (MFE 2): This microfrontend focuses on a different functionality with
   its own UI and local state.

## Technologies:
   ● Angular 17 (for all applications)

   ● NgRx (for state management)

   ● Module Federation (for microfrontend communication within the host)

## Project Requirements:
1. Develop Microfrontends: Create two independent Angular 17 applications
   representing the microfrontends. Each microfrontend should:
   
   ● Implement NgRx for local state management specific to its functionality.
   
   ● Utilize shared components from the host application for UI elements.
   
   ● Be deployable as a standalone SPA (consider independent routing if needed).
2. Develop Host Application: Build an Angular 17 application serving as the host:
   
   ● Implement NgRx for a shared state accessible by both microfrontends.
   
   ● Develop or integrate reusable components that can be utilized by both
   microfrontends.
   
   ● Implement Module Federation to dynamically load microfrontends within the
   host (consider lazy loading strategies).
3. Integration: Integrate the microfrontends into the host application:
   
   ● Configure the host to load microfrontends based on routing or specific criteria.
   
   ● Ensure seamless communication between microfrontends and the host
   application using the shared state.
   
   ● Demonstrate the ability for each microfrontend to function independently as a
   separate SPA.
4. Documentation: Provide a brief document outlining your approach and key
   functionalities.
5. The topic of the project is your choice.
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
