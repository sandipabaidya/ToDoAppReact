import React from 'react';
import ReactDOM from 'react-dom';


export default class Clock extends React.Component{
    constructor(){
        super();
        this.state= {time: new Date(), True: true, False:false};
    }

    componentDidMount(){
        this.timer =setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({time: new Date()});
    }
    render(){
        return this.state.True &&
        ( <p>time now is :  { this.state.time.toString() }</p> );
    }
}