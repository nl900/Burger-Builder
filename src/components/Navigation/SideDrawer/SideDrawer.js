import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'

const sideDrawer = (props) => {
    //conditionally attach different css classes
    
    return (
        <div className={classes.sideDrawer}>
            {/* <div className={classes.Logo}>
                <Logo/>
            </div> */}
        <nav>
            <NavigationItems/>
        </nav>
        
        </div>
    );

};

export default sideDrawer;