import React, { Component } from 'react';
import {inject,observer}from "mobx-react";
@inject("home")
@observer
class Home extends Component {
      render() {
        console.log(this.props);
        return (
            <>
            <span onClick={()=>this.props.home.change('+')}>+</span>
            {this.props.home.count}
            --
            {this.props.home.a}
            <span onClick={()=>this.props.home.change("-")}>-</span>
            </>
        );
    }
}

export default Home;