import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaiseButton from 'material-ui/RaisedButton';

export default class FormShoppingPreferences extends Component {
    continue = e => {
        e.preventDefault();
        // process data
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            occupation,
            city,
            bio
        } = this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='confirm'></AppBar>
                    <br />
                    <br />
                    <List>
                        <ListItem
                            primaryText='First Name'
                            secondaryText={firstName}
                        ></ListItem>
                        <ListItem
                            primaryText='Last Name'
                            secondaryText={lastName}
                        ></ListItem>
                        <ListItem
                            primaryText='Email'
                            secondaryText={email}
                        ></ListItem>
                        <ListItem
                            primaryText='Occupation'
                            secondaryText={occupation}
                        ></ListItem>
                        <ListItem
                            primaryText='Bio'
                            secondaryText={bio}
                        ></ListItem>
                        <ListItem
                            primaryText='City'
                            secondaryText={city}
                        ></ListItem>
                    </List>
                    <br />
                    <br />
                    <RaiseButton
                        label='Previous'
                        primary={false}
                        onClick={this.back}
                    ></RaiseButton>{' '}
                    <RaiseButton
                        label='Confirm & Continue'
                        primary={true}
                        onClick={this.continue}
                    ></RaiseButton>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
