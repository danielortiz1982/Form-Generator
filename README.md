# JavaScript Node ES6 Form Generator

> Form Generator is a lightweight JavaScript library that builds dynamic forms from a json config object.

> [Dependencies](#dependencies) | [Usage](#es6-form-generator-usage) | [Demo](#demo-usage) | [FG JSON configuration](#form-generator-json-configuration)

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

    npm install -g sass

## ES6 Form Generator Usage

##### Clone Form Generator into project
    git clone https://github.com/danielortiz1982/Form-Generator.git
    
##### (Optional) Remove/Delete Demo directory
     rm -rf Demo

##### Import the Form Generator
    import FG from './FormGenerator'

##### Import Form Generator JSON configuration
    import Data from './form-data/form-config.json'

##### Invoke the newForm method and pass in the form data object
    FG.FormGenerator.newForm(Data)

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

## Form Generator JSON configuration
```
{
    "FormName": "FGForgotPassword",
    "FormAction": "FG-action",
    "Insert": "FG-form",
    "payload": {},
    "FormConponents": [
        {
            "FormComponentName": "FGUserName",
            "FormConponent": "input",
            "FormLabel": "Input:",
            "id": "FG-input",
            "class": "FG-input",
            "placeholder": "sample placeholder",
            "value": "",
            "type": "text"
        },
        {
            "FormComponentName": "FGCheckBox",
            "FormConponent": "input",
            "FormLabel": "Check Box:",
            "id": "FG-checkbox",
            "class": "FG-checkbox",
            "placeholder": "",
            "value": "sampleCheckbox",
            "type": "checkbox"
        },
        {
            "FormComponentName": "FGRadio",
            "FormConponent": "input",
            "FormLabel": "Radio:",
            "id": "FG-radio",
            "class": "FG-checkbox",
            "placeholder": "",
            "value": "sampleRadio",
            "type": "radio"
        },
        {
            "FormComponentName": "FGColor",
            "FormConponent": "input",
            "FormLabel": "Color:",
            "id": "FG-color",
            "class": "FG-color",
            "placeholder": "",
            "value": "#353535",
            "type": "color"
        },
        {
            "FormComponentName": "FGDate",
            "FormConponent": "input",
            "FormLabel": "Date:",
            "id": "FG-date",
            "class": "FG-date",
            "placeholder": "",
            "value": "",
            "type": "date"
        },
        {
            "FormComponentName": "FGDateTimeLocal",
            "FormConponent": "input",
            "FormLabel": "Date Time Local:",
            "id": "FG-datetime-local",
            "class": "FG-datetime-local",
            "placeholder": "",
            "value": "",
            "type": "datetime-local"
        },
        {
            "FormComponentName": "FGEmail",
            "FormConponent": "input",
            "FormLabel": "Email:",
            "id": "FG-email",
            "class": "FG-email",
            "placeholder": "",
            "value": "",
            "type": "email"
        },
        {
            "FormComponentName": "FGFile",
            "FormConponent": "input",
            "FormLabel": "File:",
            "id": "FG-file",
            "class": "FG-file",
            "placeholder": "",
            "value": "",
            "type": "file"
        },
        {
            "FormComponentName": "FGHidden",
            "FormConponent": "input",
            "FormLabel": "Hidden:",
            "id": "FG-hidden",
            "class": "FG-hidden",
            "placeholder": "",
            "value": "",
            "type": "hidden"
        },
        {
            "FormComponentName": "FGImage",
            "FormConponent": "input",
            "FormLabel": "Image:",
            "id": "FG-image",
            "class": "FG-image",
            "placeholder": "",
            "value": "",
            "type": "image"
        },
        {
            "FormComponentName": "FGMonth",
            "FormConponent": "input",
            "FormLabel": "Month:",
            "id": "FG-month",
            "class": "FG-month",
            "placeholder": "",
            "value": "",
            "type": "month"
        },
        {
            "FormComponentName": "FGNumber",
            "FormConponent": "input",
            "FormLabel": "Number:",
            "id": "FG-number",
            "class": "FG-number",
            "placeholder": "",
            "value": "",
            "type": "number"
        },
        {
            "FormComponentName": "FGPassword",
            "FormConponent": "input",
            "FormLabel": "Password:",
            "id": "FG-password",
            "class": "FG-password",
            "placeholder": "",
            "value": "",
            "type": "password"
        },
        {
            "FormComponentName": "FGRange",
            "FormConponent": "input",
            "FormLabel": "Range",
            "id": "FG-range",
            "class": "FG-range",
            "placeholder": "",
            "value": "",
            "type": "range"
        },
        {
            "FormComponentName": "FGSearch",
            "FormConponent": "input",
            "FormLabel": "Search",
            "id": "FG-search",
            "class": "FG-search",
            "placeholder": "",
            "value": "",
            "type": "search"
        },
        {
            "FormComponentName": "FGTel",
            "FormConponent": "input",
            "FormLabel": "Tel",
            "id": "FG-tel",
            "class": "FG-tel",
            "placeholder": "",
            "value": "",
            "type": "tel"
        },
        {
            "FormComponentName": "FGTime",
            "FormConponent": "input",
            "FormLabel": "Time",
            "id": "FG-time",
            "class": "FG-time",
            "placeholder": "",
            "value": "",
            "type": "time"
        },
        {
            "FormComponentName": "FGUrl",
            "FormConponent": "input",
            "FormLabel": "URL",
            "id": "FG-url",
            "class": "FG-url",
            "placeholder": "",
            "value": "",
            "type": "url"
        },
        {
            "FormComponentName": "FGWeek",
            "FormConponent": "input",
            "FormLabel": "Week",
            "id": "FG-week",
            "class": "FG-week",
            "placeholder": "",
            "value": "",
            "type": "week"
        },
        {
            "FormComponentName": "FGSelect",
            "FormConponent": "select",
            "FormLabel": "Select",
            "id": "FG-select",
            "class": "FG-select",
            "value": "",
            "options": ["Opt1", "Opt2", "Opt3"]
        },
        {
            "FormComponentName": "FGTextarea",
            "FormConponent": "textarea",
            "FormLabel": "Textarea",
            "id": "FG-textarea",
            "placeholder": "Textarea",
            "class": "FG-textarea",
            "value": "",
            "rows": "10",
            "cols": "50",
            "maxlength": "100"
        },
        {
            "FormComponentName": "FGButton",
            "FormConponent": "input",
            "FormLabel": "Button",
            "id": "FG-button",
            "class": "FG-button",
            "placeholder": "Please enter email here...",
            "value": "Button",
            "type": "button"
        },
        {
            "FormComponentName": "FGReset",
            "FormConponent": "input",
            "FormLabel": "Reset",
            "id": "FG-reset",
            "class": "FG-reset",
            "placeholder": "",
            "value": "Reset",
            "type": "reset"
        },
        {
            "FormComponentName": "FGSubmit",
            "FormConponent": "input",
            "FormLabel": "Submit",
            "id": "FG-submit",
            "class": "FG-submit",
            "placeholder": "",
            "value": "Submit",
            "type": "submit"
        }
    ]
}

```


 
