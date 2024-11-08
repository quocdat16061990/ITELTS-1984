### Introduction:
1. Create a paragraph with two blanks (_input), where the user can either type or drag-and-drop answers.
2. Provide a suggestion list for the user to drag words into the blanks. The word "green" should be in the list and highlighted in red.
3. Ensure that only the correct word can be dragged into the correct blank (the first blank should be "blue", the second should be "green").
4. Once the user drags the correct word, the input field should automatically fill and become uneditable. If the user drags the wrong word, the suggestion should return to its original position.
5. Add a Submit button to allow the user to check their answers.
6. Display a message indicating whether the answers are correct or incorrect.
7. After clicking Submit, disable the Submit button. When the Reset button is clicked, enable the Submit button again.

## Installation
Follow these steps to get the application running on your local machine:

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Visit the deployed link for live testing:

    https://ielts-1984-aorgcxrd8-kimjongun83s-projects.vercel.app

## Technologies Used
- **React.js**: JavaScript library for building user interfaces.
- **SCSS**: SASS-based stylesheet language for styling the components.

## Features
- **Drag-and-Drop** functionality to fill in blanks.
- **Dynamic interaction**: Allows users to check answers and reset the exercise.
- **User feedback**: After submission, the application shows whether the answers are correct or not.

## Notes
- Make sure to drag and drop the words into the correct blanks.
- The Submit button is disabled after submission, and can be enabled again by clicking the Reset button.
- The word "green" is highlighted in red as part of the task instructions.
