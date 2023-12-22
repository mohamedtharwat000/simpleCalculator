# React Simple Calculator

This is a simple calculator app built with React. It has a clean and minimalist user interface with support for basic arithmetic operations. 

## Live preview

[Simple Calculator](https://mohamedtharwat000.github.io/simpleCalculator/build/)

## Features

- Performs basic calculations (+, -, *, /, %)
- Support for decimals, parentheses and Pi 
- Calculates squares roots using Math.sqrt
- Raises numbers to powers using Math.pow
- Clears the current operation
- Deletes last character entered  
- Displays calculation history
- Saves calculation history to localStorage
- Has buttons for common math constants like Pi
- Automatically formats large numbers
- Smooth scrolling for long operations
- Responsive design
- Dark mode support

## Usage 

The calculator works like any basic handheld calculator. Users can:

- Click number buttons (0-9) to add them to the current operation
- Click operator buttons (+, -, *, /, %) to perform operations
- Click equals to evaluate the current operation
- Click AC to clear everything and start over 
- Click the backspace "<" button to delete the last character
- Click the Pi button to insert the constant
- Click the square root button to take roots
- Click the power "^" button to raise a number to a power
- Click the percent button for percentages
- Use decimals and parentheses as expected

The display shows the current operation being typed out. The result of the last operation is shown below.

## User Interface

The calculator UI is built with Bootstrap for responsive design.  

It has:

- A header with the app name and theme toggle
- A main area with the calculator display and buttons
- A footer with credits

The theme can be toggled between light and dark mode. Bootstrap classes control the styling.

The display shows the current operation and result using `<output>` tags. It scrolls long operations smoothly.  

Buttons are grouped in a grid for easy access. Special calculated constants like Pi and root have custom components.

The app is fully usable on mobile screens thanks to Bootstrap.

## Calculation History

The calculator maintains a history of past operations locally using localStorage.

The history can be accessed by clicking on the 'H' button. This shows a modal with a list of past calculations. 

Each item shows the operation entered and result. 

The history modal can be dismissed by clicking outside. The clear 'X' button deletes the history.

## Code Architecture

The app is built using React and Bootstrap.

- `index.js` renders App component into root DOM node
- `App.js` renders Header, Main, Footer
- `Main.jsx` houses the Calculator component 
- `Calculator.jsx` contains the stateful logic and renders child components
- `Buttons.jsx` renders all calculator buttons
- `Screen.jsx` renders the calculator display
- `History.jsx` shows the calculation history modal

Helper modules:

- `calc.js` - houses the math evaluation logic
- `Button.jsx` - custom component to handle special buttons

React state management:

- `useState` hook manages calculator data in state
  - Keeps track of current operation, result etc
- State is passed as props to child components
- Buttons call `setCalculatorData` to update state
- Display components render the current state

## Local Storage  

LocalStorage API is used to persist calculation history across sessions.

**Saving**

- When equals is clicked, the result is saved
  - Current operation string and calculated result are stored in an object
- This object is pushed into a `history` array 
- The array is serialized with JSON and stored into localStorage

**Retrieval**

- On mount, the history array is parsed from localStorage
- The `history` array is kept in React state
- History modal renders this array

**Clearing**

- Clicking the clear button in history modal removes the item from localStorage
- History state array is also reset

This allows the app to maintain a persistent calculation log across uses.

## Styling

SCSS is used for styling the app.

Some highlights:

- Boostrap class names are used for general layout and responsiveness
- Common styles like flexbox are extracted into utility classes
- Custom CSS properties are defined for colors and sizing  
- Button styling is done via global button class
- Calc display uses fixed sizing and overflow scrolling
- Custom collapse animation for history modal

This allows modifying styles quickly across components.

## Dark Mode

The app has full dark mode support using CSS custom properties. 

- On page load, the dark mode media query is checked
- The `data-theme` attribute is set on the root element based on this
- Boostrap applies its dark mode styling based on this attribute 
- A toggle switch allows manually overriding the theme
- On toggle, `data-theme` is updated and style reapplied

This ensures dark mode can be used based on system preference, or overridden manually.

## Summary

In summary, this is a responsive calculator app with:

- Standard calculator operations
- Persistent calculation history
- Clean UI with dark mode support  
- Mobile friendly responsive design
- Developed using React and Bootstrap

The code shows how to structure a React project into reusable components and manage state. It uses Bootstrap for quick styling and responsiveness.

Additional enhancements can include more advanced math functions, animated transitions, sound effects etc. The current functionality provides a solid foundation to build upon.

Let me know if you would like me to modify or expand this README further. I tried to capture the main highlights and features of the code in detail.


calculator with system dark-mode support and history for last operations

## Contributing

Contributions are welcome! Here are some ways you can contribute to this project:

- Report bugs and issues
- Fix bugs and issues
- Add new validation functionality
- Improve styling and overall UX
- Refactor code to improve quality
- Write documentation and improve existing docs

To contribute:
1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push your branch and submit a pull request

I will review pull requests and provide feedback.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

created by Mohamed Tharwat


**screenshots**
![](https://raw.githubusercontent.com/mohamedtharwat000/simpleCalculator/master/screenshots/Screenshot%202023-03-29%20at%2001-51-17%20Simple%20Calculator.png)
