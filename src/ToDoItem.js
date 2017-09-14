import React from "react";

export default class TodoItem extends React.Component{

    delete(id){
       this.props.refdeleteItem(id);
    }

    complete(id){
           this.props.refcomplete(id);
        }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.title === this.props.title) return false;

        return true;
      }
    render() {
      const isCompleted = this.props.isCompleted;
      return (
        <div>
          {isCompleted ? (
            <span><strike>{this.props.title}</strike></span>
          ) : (
                <div>

                    <span>{this.props.title}</span> &nbsp;
                    <button onClick={this.delete.bind(this, this.props.title)}>x</button> &nbsp;
                    <button onClick={this.complete.bind(this, this.props.title)}>complete</button>
                </div>
          )}
        </div>
      );
    }
}
