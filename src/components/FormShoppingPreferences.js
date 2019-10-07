import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';

export default class FormShoppingPreferences extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='enter details'></AppBar>
                    <TextField
                        hintText='enter occupation'
                        floatingLabelFixed='occupation'
                        name='occupation'
                        onChange={handleChange}
                        defaultValue={values.occupation}
                    ></TextField>
                    <br />
                    <TextField
                        hintText='enter city'
                        floatingLabelFixed='city'
                        name='city'
                        onChange={handleChange}
                        defaultValue={values.city}
                    ></TextField>
                    <br />
                    <TextField
                        hintText='enter bio'
                        floatingLabelFixed='bio'
                        name='bio'
                        onChange={handleChange}
                        defaultValue={values.bio}
                    ></TextField>
                    <br />
                    <RaiseButton
                        label='Previous'
                        primary={false}
                        onClick={this.back}
                    ></RaiseButton>{' '}
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
