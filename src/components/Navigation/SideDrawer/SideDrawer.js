import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    //conditionally attach different css classes
    
    return (
        <div className={classes.sideDrawer}>
        <Logo height="11%"/>
        <nav>
            <NavigationItems/>
        </nav>
        
        </div>
    );

};

export default sideDrawer;