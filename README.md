# JavaScript Node ES6 Form Generator

> Form Generator is a lightweight JavaScript library that builds dynamic forms from a json config object.

## Dependencies
* Nodejs
* NPM
* Git
* Babel 
* Webpack
* **(Demo Dependencies)** SASS/SCSS

### Install Nodejs & NPM for Windows, OSX and Linux
[https://nodejs.org](https://nodejs.org/en/)

## Install Dependencies

##### Install Babel core & cli globally on your machine
    npm install -g --save-dev @babel/core @babel/cli

##### Install webpack & webpack-cli globally on your machine
    npm install -g --save-dev webpack webpack-cli

##### Install SASS/SCSS on your machine
> **Demo Dependencies Only**

    npm install -g SASS

## ES6 Form Generator Usage

##### Clone Form Generator into project
    https://github.com/danielortiz1982/Form-Generator.git

##### (Optional) Remove/Delete Demo directory
     rm -rf Demo

##### Import the Form Generator
    import FormGenerator from './FormGenerator'

##### Import Form Generator JSON configuration
    import Data from './form-data/form-config.json'

## Demo Usage
> Once you have cloned the Form Generator repo into your project navigate to the Demo directory to see a working example.

## Install Demo Dependencies

##### Change directories into the **Demo** folder
    cd ./Demo

##### Install the Nodejs Dependencies
    npm install

##### Build JavaScript assets 
    npm run build

##### Build SASS assets 
    npm run styles

##### Start the demo Node server 
    npm run server

##### You can now view a working demo when you visit the URL below 
    http://localhost:3000/



 