import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'></AppBar>
                    <br />
                    <h1>Done.</h1>
                    <br />
                    <p>email has been sent</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
