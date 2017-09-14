import React from "react";
import ToDoItem from "./ToDoItem.js";

export default class ToDos extends React.Component{


    CreateToDoItems(){
         return this.props.todos.map((todo) => {
         return <ToDoItem title={todo.title} refdeleteItem = {this.props.paramfuncDelete} refcomplete={this.props.refcomplete} isCompleted={todo.iscompleted}/>
         });
    }

    render() {
        return (<div>
                    {this.CreateToDoItems()}
                </div>);
            }
}
