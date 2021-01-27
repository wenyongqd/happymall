import React, { Component } from 'react';
import './theme.css';
import TopNav from '../top-nav/';
import SideNav from '../side-nav/';

export default class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="wrapper">
                <TopNav></TopNav>
                <SideNav></SideNav>
                {this.props.children}
            </div>
        )
    }
}
