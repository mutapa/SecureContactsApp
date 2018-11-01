import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import {Constants} from 'expo'
import PropTypes from 'prop-types'
import { black } from 'ansi-colors';

export default class LoginScreen extends Component{
    static propTypes = {
        loginScreen: PropTypes.func,
    }
    constructor(props) {
        super(props)
        this.state = {
            noOfLoginAttempts: 0,
            isLoginSuccessful: false,
            username: '',
            password: '',
        }
    }
 
    attemptLogin = () => {
        console.log('Calling the attempt login method')
        
        this.setState(prevState=> ({
            noOfLoginAttempts: prevState.noOfLoginAttempts + 1,
        }))
        this.props.navigation.navigate({routeName: 'Main'});
        console.log('Routing to Main navigator')
        return true;
    }

    handleUsernameChange = username => {
        this.setState({username})
    }

    handlePasswordChange = password   => {
        this.setState({password})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Use your Google credentials to log in</Text>
                <Text>Login attempts: {this.state.noOfLoginAttempts}</Text>
                <Text>Enter your username:</Text>
                <TextInput style={styles.input} value={this.state.username} onChangeText={this.handleUsernameChange} autoCapitalize="none"/> 
                <Text>Enter your password:</Text>
                <TextInput style={styles.input} value={this.state.password} onChangeText={this.handlePasswordChange} autoCapitalize="none" secureTextEntry={true} textContentType="password"/>
                <Button title="Log In" onPress={this.attemptLogin} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',        
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
});


