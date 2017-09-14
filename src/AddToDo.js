import React from "react";
export default class AddToDo extends React.Component{
    render(){
    return (<div>
        <input ref="itemText" text="ddd" />
        <button onClick={() => this.updateTodo()}>Add</button>
    </div>);
    }

    updateTodo(){
        this.props.callback(this.refs.itemText.value);
    }
}