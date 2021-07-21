# BootCamp2021 Project01: Todo Console and Persistent Data App in TypeScript

- This project is completed by following chapter one of "Essential TypeScript From Beginner to Pro" by "Adam Freeman".

This is a console based APP so for better understanding snaps from console are as follows. Each section is titled based on the commits.

1. Initialize a basic TypeScript project

![Basic TypeScript Project](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step01.PNG)

2. Create Basic Todo App

- Basic todo app with all the opertaions performed

![Basic Todo App](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/step02-1.PNG)

![Basic Todo App](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step02-2.PNG)

3. Add inquirer.js to prompt user for input

- On start of the app

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-1.PNG)

- Adding a new todo

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-2.PNG)

- Hide completed todos

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-3.PNG)

- Mark a todo as completed

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-4.PNG)

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-5.PNG)

- Remove completed todos

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-6.PNG)

- Quit App

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-7.PNG)

3. Add lowdb to persistently store data

   - While using lowdb to store data all the working remains the same with only difference that rather than using hard coded data from the App, data stored in Todos.json file will be used and Todos.json file is updated with every change made to todos collection.

- When App is started and no todos are added

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-1.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-2.PNG)

- New Todos added

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-3.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-4.PNG)

- Completed Todos removed

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-5.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-6.PNG)
