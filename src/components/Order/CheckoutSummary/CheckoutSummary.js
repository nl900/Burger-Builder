import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummar}>
            <h1>We hope you enjoy!</h1>
            <div style={{width:'100%', margin:'auto'  }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
            btnType="Danger"
            CLICKED>CANCEL</Button>
            
            <Button 
            btnType="Success"
            CLICKED>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;