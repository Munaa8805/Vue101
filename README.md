# Vue Application Projects

This repository contains examples and exercises for learning Vue.js.

## Vue 101

The `vue101` folder demonstrates the basics of Vue 3, including data binding, methods, and creating an app instance.

### `app.js`

This script creates the root Vue instance and mounts it to the `#user-goal` HTML element.

#### Data Properties

The application state includes the following properties:

-   **`courseGoalA`** (`String`): A static text goal ("Finish the course").
-   **`courseGoalB`** (`String`): A static text goal ("Hell world").
-   **`courseGoalC`** (`String`): Contains HTML content intended to be rendered using `v-html`.
-   **`vueLink`** (`String`): A URL pointing to the official Vue.js documentation.

#### Methods

The application defines the following methods:

-   **`outputGoal()`**
    -   Generates a random number.
    -   Returns "Learn Vue" if the number is less than 0.5.
    -   Returns the value of `courseGoalB` otherwise.