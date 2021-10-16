# BootCamp2021 Project01: Todo Console and Persistent Data App in TypeScript

- This project is completed by following chapter one of "Essential TypeScript From Beginner to Pro" by "Adam Freeman".

## Steps to code "Todo App"

Description for each step along with console output for the particular step is as follows. As this is a console based app so outputs in the image forms are helfull to understand the code.

### 1. Initialize a basic TypeScript project

Initialize a basic TypeScript project by executing `npm init --yes` which creates "package.json" file to keep track of packages and to configure development tools. Also create a "tsconfig.json" file to define configuration of the TypeScript compiler. Add a file named "index.ts" in the “src” folder. "src" folder is the one where all the TypeScript files to be created. To generate JavaScript files from the TypeScript files, run the command `tsc` which will generate pure JS files in "dist" folder based on TS files in "src" folder. To execute the code run node `dist/index.js` to view output of the code in the command prompt. These steps are known as compilation and execution and will remain the same during the course of this project. Create a ".gitignore" file to skip the files which are not to be tracked by git.

![Basic TypeScript Project](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step01.PNG)

### 2. Create Basic Todo App

Create "todoItem.ts" to define a TodoItem class which is a template for a single todo item (all the todo’s will be of same type). Also define a method in the class to display a todo item in the console. (A single todo is a collection of id, task and complete status) Create "todoCollection.ts" to define TodoCollection class which is a template for collection of todos. Here mapping convention is used to store the todos. A collection contains name of the collection and the list of todos. Also define methods to add a todo, get a todo by id and complete status, mark a todo as completed/incomplete, remove completed todos, count todos (total, complete and incomplete) and print the collection. Update "index.ts" to define a list of todos manually and create a collection from the data. Add new todos to the collection and fetch todos based on id. Get todos based on complete staus and change status of few of them. Remove todos from the collection if they are completed and display collection every time while applying a method. Compiled and executed the code.

Basic todo app with all the opertaions performed

![Basic Todo App](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/step02-1.PNG)

![Basic Todo App](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step02-2.PNG)

### 3. Add inquirer.js to prompt user for input

Install inquirer.js in the app using `npm i inquirer` a third-party package used for prompting to get user inputs. Working with typescript there is a need to define types too, doing it manually is a difficult task so install inquirer types using `npm install --save-dev @types/inquirer` which will provide us with types required for working with inquirer package. These installations will update “package.json” and create a "package-lock.json" file along with a "node_modules" folder. We have no intensions to keep track of the said folder thus add it to ".gitignore". Update "index.ts" to import inquirer in the app and remove manually added methods on collection. Write a promptUser function which displays the collection when ever called and a list of options for the user to select. Add commands in the app for user to select. (add, toggle, complete, delete, quit). Compile and execute the code

On start of the app

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-1.PNG)

Adding a new todo

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-2.PNG)

Hide completed todos

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-3.PNG)

Mark a todo as completed

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-4.PNG)

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-5.PNG)

Remove completed todos

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-6.PNG)

Quit App

![App with inquirer.js](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step03-7.PNG)

### 4. Add lowdb to persistently store data

Install lowdb package in the app using `npm install lowdb@1.0.0` a third-party package used for storing data in json format. Working with typescript there is a need to define types too, doing it manually is a difficult task so install lowbd types using `npm install --save-dev @types/lowdb` which will provide us with types required for working with lowdb package. These installations will update "package.json” and "package-lock.json". Update "todoCollection.ts" so that Map be available to subclasses too. Create "jsonTodoCollection.ts" to define "JsonTodoCollection" class which is a subclass of "TodoCollection" class. Here defines a schema for the stored items and a file name in which data to be stored. Define functions to add, remove and mark a todo as completed along with a function to store/save data. Update "index.ts" to import and use "JsonTodoCollection" class. Remove dummy data from the code. Compile and execute the code. This time when we execute the code a file named "Todos.json" will be created and this file updates every time we uses a the app and make any type of changes with the todos.

- While using lowdb to store data all the working remains the same with only difference that rather than using hard coded data from the App, data stored in Todos.json file will be used and Todos.json file is updated with every change made to todos collection.

When App is started and no todos are added

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-1.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-2.PNG)

New Todos added

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-3.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-4.PNG)

Completed Todos removed

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-5.PNG)

![App with lowdb](https://github.com/hassan-ak/todo-app-typescript/blob/main/outputs/Step04-6.PNG)
