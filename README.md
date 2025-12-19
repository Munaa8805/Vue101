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

## Vue 101 Dynamic Styling

The `vue101dynamicstyle` folder demonstrates different ways to dynamically apply styles and CSS classes in Vue.

### `app.js`

This script manages the selection state of five boxes.

#### Data Properties

-   **`boxAselected`** through **`boxEselected`** (`Boolean`): Selection states for boxes A through E.

#### Computed Properties

-   **`boxCclasses`**: Returns an object `{ active: this.boxCselected }` for binding classes to Box C.

#### Methods

-   **`boxSelected(box)`**: Toggles the boolean selected state for the specific box identifier ('A', 'B', 'C', 'D', or 'E').

## Vue 102 Events

The `vue102events` folder focuses on event binding, event modifiers, and passing arguments to methods.

### `app.js`

This script manages event listeners and state updates for the `#events` element.

#### Data Properties

-   **`counter`** (`Number`): A counter value initialized to 10.
-   **`name`** (`String`): A name string, defaults to "Hellow".
-   **`confirmName`** (`String`): Stores the confirmed name input.

#### Methods

-   **`confirmNameInput()`**: Updates `confirmName` with the current value of `name`.
-   **`submitHandler(e)`**: Prevents default form submission and triggers an alert.
-   **`signInHandler()`**: Triggers a sign-in alert.
-   **`addCounter()`**: Increments `counter` by 1.
-   **`reducerCounter()`**: Decrements `counter` by 1.
-   **`dynamicCounter(num)`**: Adds a specific number (`num`) to `counter`.
-   **`setName(eve, lastName)`**: Updates `name` combining the event target value and the `lastName` argument.

## Vue 103 Two-Way Binding

The `vue103twobinding` folder demonstrates two-way data binding and reactivity patterns.

### `app.js`

This script handles counter operations and name input binding for the `#events` element.

#### Data Properties

-   **`counter`** (`Number`): A counter value initialized to 0.
-   **`name`** (`String`): A string for storing user input.
-   **`fullname`** (`String`): A string for storing the computed full name.

#### Computed Properties

-   **`fullname`**: Returns "Hi world" appended to the `name`.

#### Watchers

-   **`name(value)`**: Updates `fullname` when `name` changes.
-   **`lastName(value)`**: Updates `fullname` when `lastName` changes.

#### Methods

-   **`outputFullname()`**: Returns the full name string based on current `name`.
-   **`setName(event, lastName)`**: Updates `name` from the input event value.
-   **`add(num)`**: Adds a number to the counter.
-   **`reduce(num)`**: Subtracts a number from the counter.
-   **`resetInput()`**: Resets the `name` property to an empty string.