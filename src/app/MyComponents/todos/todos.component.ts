import { Component, OnInit } from '@angular/core';  
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string; // Holds the raw string of todos from local storage
  todos: Todo[]; // Array of Todo items

  constructor() { 
    // Retrieve todos from local storage
    this.localItem = localStorage.getItem("todos");
    
    // If no todos are found, initialize an empty array
    if(this.localItem == null){
      this.todos = [];
    }
    // If todos are found, parse them from JSON to the array
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }
  }

  ngOnInit(): void {}

  // Method to delete a todo item
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo); // Find the index of the todo
    this.todos.splice(index, 1); // Remove the todo from the array
    localStorage.setItem("todos", JSON.stringify(this.todos)); // Update local storage
  }

  // Method to add a new todo item
  addTodo(todo: Todo) {
    console.log(todo); 
    this.todos.push(todo); // Add the new todo to the array
    localStorage.setItem("todos", JSON.stringify(this.todos)); // Update local storage
  }

  // Method to toggle the active status of a todo item
  toggleTodo(todo: Todo) { 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active; // Toggle the active status
    localStorage.setItem("todos", JSON.stringify(this.todos)); // Update local storage
    console.log(todo)
  }
}
