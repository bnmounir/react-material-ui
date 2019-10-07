import React, { Component } from 'react';
import FormProfile from './FormProfile';
import FormShoppingPreferences from './FormShoppingPreferences';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };
    // proceed to next
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };
    // go back to previous
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // handle fields change
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const {
            step,
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        } = this.state;
        const values = {
            step,
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        };

        switch (step) {
            case 1:
                return (
                    <FormProfile
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    ></FormProfile>
                );
            case 2:
                return (
                    <FormShoppingPreferences
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    ></FormShoppingPreferences>
                );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    ></Confirm>
                );
            case 4:
                return <Success></Success>;
        }
    }
}

export default UserForm;
