# Country Check App

React application that allows users to toggle the selection of different countries using checkboxes. The component utilizes the useReducer hook to manage state updates efficiently. The state is defined to track the selection status of individual countries (India, USA, France) and an overall "Select All" checkbox. The component includes a reducer function for handling state updates based on specific action types, such as toggling individual country checkboxes or selecting/deselecting all countries at once.

The user interface displays a card with checkboxes for each country and a "Select All" checkbox. Users can interact with the checkboxes to toggle the selection status of individual countries or select/deselect all countries simultaneously. The component provides a clear and user-friendly way to manage the selection of countries within the application.

![screenshot](/public/screenshot-check.png?raw=true)

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Tests](#test)

## Requirements

Before you get started, ensure that you have the following dependencies installed:

- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/maritocuate/country-checkbox.git
   ```

2. Navigate to the project directory:

   ```bash
   cd country-checkbox
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Test

The test focuses on ensuring the correct behavior of the component's interaction and state management. The suite employs the @testing-library/react library to render and interact with the React component.

Test Cases:

1. Individual Country Selection.
2. Select All Countries.
3. Deselect "Select All" on Individual Country Deselection.
4. Select "Select All" when All Countries are Selected.

```bash
  npm run test
```
