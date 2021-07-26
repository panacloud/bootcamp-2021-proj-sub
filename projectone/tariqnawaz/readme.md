# Typenquirer.js
There are two ways to provide TypeScript with the information that it requires for static typing. The first approach is to describe the types yourself.
The second approach is to use type declarations provided by someone else The Definitely Typed project is a repository of TypeScript type declarations for thousands of JavaScript packages, including the Inquirer.js package
Type declarations are installed using the npm install command, just like JavaScript packages.
The save-dev argument is used for packages that are used in development but that are not part of theapplication. The package name is @types/ followed by the name of the package for which type descriptions are required. For the Inquirer.js package, the type declarations package is @types/inquirer because inquirer is the name used to install the JavaScript package

# Installing Type Definitions
***npm install --save-dev @types/inquirer***

Type declarations are installed using the npm install command, just like JavaScript packages.The save-dev argument is used for packages that are used in development but that are not part of the application. The package name is @types/ followed by the name of the package for which type descriptions are required. For the Inquirer.js package, the type declarations package is @types inquirer because inquirer is the name used to install the JavaScript package.

# Installing Inquirer.js by
***'npm install inquirer@7.3.3'***

# JavaScript Map
The JavaScript Map, for example, is a general-purpose collection that stores key/value pairs. Because JavaScript has such a dynamic type system, a Map can be used to store any mix of data types using any mix of keys. The generic type arguments are enclosed in angle brackets (the < and > characters)
# getTodoItems
The getTodoItems method gets the objects from the Map using its values method and uses them to create an array using the JavaScript spread operator, which is three periods. The objects are processed using the filter method to select the objects that are required, using the includeComplete parameter to decide which objects are needed.
# removeComplete
The removeComplete method uses the Map.forEach method to inspect each TodoItem stored in the Map and calls the delete method for those whose complete property is true. When the code is executed, the following output will be produced, showing that the completed task has been removed from the collection
# getItemCounts
The type keyword is used to create a type alias, which is a convenient way to assign a name to a shape type. The type alias describes objects that have two number properties, named total and incomplete. The type alias is used as the result of the getItemCounts method, which uses the JavaScript object literal syntax to create an object whose shape matches the type alias updates the index. ts file so that the number of incomplete items is displayed to the user.
# inquirer.prompt
The inquirer.prompt method is used to prompt the user for a response and is configured using a JavaScript object. The configuration options I have chosen present the user with a list that can be navigated using the arrow keys, and a selection can be made by pressing Return. When the user makes a selection, the function passed to the then method is invoked, and the selection is available through the answers.command property.TypeScript doesn’t get in the way of using JavaScript code, and the changes make use of the Inquirer.js package to prompt the user and offer a choice of commands. There is one command available currently, which is Quit, but I’ll add more useful features shortly
# enum Commands
The enum keyword is a TypeScript feature that allows values to be given names, and will allow me to define and refer to commands without needing to duplicate string values through the application. Values from the enum are used alongside the Inquirer.js features, like this 

# Adding Commands
1. The process for adding commands is to define a new value for the Commands enum and the statements that respond when the command is selected. In this case, the new value is Toggle, and when it is selected, the value of the showCompleted variable is changed so that the displayTodoList function includes or excludes completed items. Run the commands shown in the todo folder to compile and execute the code.
2. The Inquirer.js package can present different types of questions to the user. When the user selects the Add command, the input question type is used to get the task from the user, which is used as the argument to the TodoCollection.addTodo method. Run the commands shown in Listing 1-37 in the todo folder to compile and execute the code.
# Marking Tasks Complete
Completing a task is a two-stage process that requires the user to select the item they want to complete. Listing 1-38 adds the commands and an additional prompt that will allow the user to mark tasks complete and to remove the completed items. The changes add a new prompt to the application that presents the user with the list of tasks and allows their state to be changed. The showCompleted variable is used to determine whether completed items are shown, creating a link between the Toggle and Complete commands.
Select the Complete Task option, select one or more tasks to change using the spacebar, and then press Return. The state of the tasks you selected will be changed, which will be reflected in the revised list .
Even with type definitions, there are times when TypeScript isn’t able to correctly assess the types that are being used. In this case, the Inquirer.js package allows any data type to be used in the prompts shown to the user, and the compiler isn’t able to determine that I have used only number values, which means that only number values can be received as answers. I used a type assertion to address this problem, which allows me to tell the compiler to use the type that I specify, even if it has identified a different data type (or no data type at all). When a type assertion is used, it overrides the compiler, which means that I am responsible for ensuring that the type I assert is correct.

# Persistently Storing Data
To store the to-do items persistently, I am going to use another open-source package because there is no advantage in creating functionality when there are well-written and well-tested alternatives available.
***Adding a Package and Type Definitions***
npm install lowdb@1.0.0
npm install --save-dev @types/lowdb

Lowdb is an excellent database package that stores data in a JSON file and that is used as the data
storage component for the json-server package, which I use to create HTTP web services in Part 3 of this
book.

# Schema
The type definition for Lowdb uses a schema to describe the structure of the data that will be stored, which is then applied using generic type arguments so that the TypeScript compiler can check the data types being used. For the example application, I need to store only one data type, which I describe using a type alias.

... type schemaType = {  tasks: { id: number; task: string; complete: boolean; }[]}; ...

The schema type is used when the Lowdb database is created, and the compiler can check the way that data is used when it is read from the database as in this statement, for example:

...let dbItems = this.database.get("tasks").value();...

The compiler knows that the tasks argument corresponds to the tasks property in the schema type and that the get operation will return an array of objects with id, task, and complete properties.

When the application starts, a file called Todos.json will be created in the todo folder and used to store a JSON representation of the TodoItem objects, ensuring that changes are not lost when the application is terminated.