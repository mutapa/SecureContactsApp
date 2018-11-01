import React, {Component} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import {Constants} from 'expo'
import PropTypes from 'prop-types'
import { black } from 'ansi-colors';
import Expo from 'expo';

export default class LoginScreen extends Component{
    static propTypes = {
        loginScreen: PropTypes.func,
    }
    constructor(props) {
        super(props)
        this.state = {
            isLoginSuccessful: false,
            name: '',
            photoUrl: '',
            accessToken: '',
        }
    }
 
    attemptLogin = async () => {
        console.log('Calling the attempt login method')
        try {
           const result = await Expo.Google.logInAsync({
            androidClientId: '758575904406-l7q2kqbc315u7dc86cghsfvnkut8hfbi.apps.googleusercontent.com',
            iosClientId: '758575904406-84ae5r7vkqdk0ngqedankc518b2i07kc.apps.googleusercontent.com',
            scopes: ['profile', 'email']
           });

           if(result.type === 'success'){
            console.log('Routing to Main navigator');
            this.setState({
                isLoginSuccessful: true,
                name: result.user.name,
                photoUrl: result.user.photoUrl,
                accessToken: result.accessToken,
            });
            this.props.navigation.navigate({routeName: 'Main'});
           }
        }
        catch(e){
            console.log('error', e)
        }
        
        
        
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Sign In With Google</Text>
                <Button title="Sign in with Google" onPress={this.attemptLogin} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
        justifyContent: 'center',
        alignItems: 'center',       
    },
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    header: {
        fontSize: 25,
    },
});


