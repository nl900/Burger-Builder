import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';



class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode:''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); //prevent reload page
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'A Name',
                address: {
                    street: 'A Street',
                    zipCode: '4566',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'delivery'
        }

        axios.post('/orders.json', order)   //firebase specific
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/');   //redirect to main page
            })
            .catch(error => {
                this.setState({ loading: false });
            });
        console.log(this.props.ingredients);
    }

    render () {
        let form = (
            <form>
            <Input inputtype="input" type="text" name= "name" placeholder= "Your name"/>
            <Input inputtype="input" type="email" name= "email" placeholder= "Your email"/>
            <Input inputtype="input" type="text" name= "street" placeholder= "Street"/>
            <Input inputtype="input" type="text" name= "postcode" placeholder= "postcode"/>
            <Button btntype="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );
        if (this.state.loading) {
            form=<Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your delivery details</h4>
                {form}

            </div>
        );
    }
}

export default ContactData;