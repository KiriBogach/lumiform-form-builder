# Form Builder VUE SPA
Simple recursive form builder

Demo link: [lumiform.bogach.es](https://lumiform.bogach.es)


The goal of this project is to have a basic form builder. The application is able to export the created form as JSON and load the same JSON format back into the builder. 

The application uses Vue.js and Vuex. Headless webpage (without backend).

The application is created in a way to be as responsive and fast as possible, as the created forms can be really big with thousands of lines.

## Form structure

The form is a nested structure of elements. All elements must have a title and a generated UUID. 

The possible elements are:

### Form

This is the root element, there is always one and just one.

### Page

The form element can only contain pages, zero or more. Can contain questions and sections, but not other pages.

### Qestion

A question can have one of the following response types:

- text
- number

### Section

A section can contain questions and other sections. There is no limit on the nesting level of sections.

## Interface

The form builder has a button to load an existing json from the computer and must have button for exporting (saving) the currently displayed form strucutre as json to the computer.

The builder itself is to add all the described form elements to every position they are allowed, and to change the response type of questions.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Docker install
```
docker-compose run node /bin/bash
npm install
npm run prod
```
