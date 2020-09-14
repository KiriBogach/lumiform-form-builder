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


# Form Builder VUE SPA

The goal of this task is to create a basic form builder. The application must be able to export the created form as JSON and load the same JSON format back into the builder. Since this is just the builder, displaying the fillable form is outside the scope of this challenge.

The application needs to use Vue.js and can use Vuex (if appropriate). The application does not need any backend, everything should happen client-side.

The application should be created in a way to be as responsive and fast as possible, as the created forms can be really big with thousands of lines.

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

## An example form

An example form is provided in the example_1 directory. The json structure describes the form in the png file. The resulting form builder does not need to look the same as the image provided, but must be able to carry out all the needed functionality.

## Interface

The form builder must have button to load an existing json from the computer and must have button for exporting (saving) the currently displayed form strucutre as json to the computer.

The builder itself must be able to add all the described form elements to every position they are allowed, and to change the response type of questions.