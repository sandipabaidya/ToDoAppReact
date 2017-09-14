import React from "react";
import ToDos from "./ToDos.js";
import AddToDo from "./AddToDo.js";


export default class ToDoApp extends React.Component{
    constructor(){
        super();
        this.state = {todos: [{ title:'Learn React', iscompleted:false}, {title:'Complete project', iscompleted:false}]};
        this.addToDoItem =this.addToDoItem.bind(this);
        this.refdeleteTodo=this.deleteTodo.bind(this);
        this.refcomplete=this.completeTodo.bind(this);
    }

    addToDoItem(item){
        var newItem={ title:item, iscompleted:false};
        this.setState({todos: this.state.todos.concat(newItem)});
    }

    deleteTodo(id){
        this.setState((prevState) => {
          return {todos: prevState.todos.filter(todo => todo.title != id )};
        });
    }


    completeTodo(id){

        let updatedTodos = this.state.todos.map(function(todo) {
                               if(todo.title === id ) todo.iscompleted=true;
                               return todo;
                           })
        this.setState({todos : updatedTodos});
    }

    render(){
        return (<div><h1>To Do</h1>

        <AddToDo callback={this.addToDoItem} />
        <ToDos todos={this.state.todos} paramfuncDelete={this.refdeleteTodo} refcomplete={this.refcomplete}  />

        </div>);

    }
}