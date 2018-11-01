import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import Expo from 'expo';

export default class LoginScreen extends Component{
    static propTypes = {
        loginScreen: PropTypes.func,
    }
    constructor(props) {
        super(props)
    }
 
    componentWillMount() {
        const token = AsyncStorage.getItem('token');
        console.log('Token: ' + token);
        if(token){
            this.props.navigation.navigate({routeName: 'Main'});           
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
            await AsyncStorage.setItem('name', result.user.email);
            await AsyncStorage.setItem('photoUrl', result.user.photoUrl);
            await AsyncStorage.setItem('token', result.accessToken);
            
            this.props.navigation.navigate({routeName: 'Main'});
           }
           else {
               console.log('Google Authentication cancelled');
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


