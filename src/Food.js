import React, { Component } from 'react';

class Food extends Component{
    render(){
        return (<h1>{this.props.fav} </h1>);
    }
}

export default Food;
