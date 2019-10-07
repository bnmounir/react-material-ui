import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';

export default class FormProfile extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='enter details'></AppBar>
                    <TextField
                        hintText='enter first name'
                        floatingLabelFixed='first name'
                        name='firstName'
                        onChange={handleChange}
                        defaultValue={values.firstName}
                    ></TextField>
                    <br />
                    <TextField
                        hintText='enter last name'
                        floatingLabelFixed='last name'
                        name='lastName'
                        onChange={handleChange}
                        defaultValue={values.lastName}
                    ></TextField>
                    <br />
                    <TextField
                        hintText='enter email'
                        floatingLabelFixed='email'
                        name='email'
                        onChange={handleChange}
                        defaultValue={values.email}
                    ></TextField>
                    <br />
                    <RaiseButton
                        label='Continue'
                        primary={true}
                        onClick={this.continue}
                    ></RaiseButton>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
