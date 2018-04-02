import React,{ Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import CardSection from './Common/CardSection';
import Card from './Common/Card';
import Button from './Common/Button';
import Input from './Common/Input';
import firebase from 'firebase';
import Spinner from './Common/Spinner';

export default class LoginForm extends Component {
    state = {
        email:'',
        password: '',
        error: '',
        isLoading: false
    };

    changedTextEmail= (email) => {
        this.setState({ email: email })
    };
    
    changedTextPassword= (pass) => {
        this.setState({ password: pass })
    };

    signinAction() {
        const {email, password} = this.state;
        this.setState({ error: '', isLoading:true });
        firebase.auth().signInWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this)).catch( () => {
            firebase.auth().createUserWithEmailAndPassword(email,password).then(this.onLoginSuccess.bind(this)).catch( (errorl) => {
                this.setState({ error: errorl.message, isLoading: false });    
            })
            }
        )
    };

    renderButton() {
        if (this.state.isLoading) {
            return <Spinner size='small' />
        } 

        return (<Button onPress={this.signinAction.bind(this)}>
                    <Text>Login</Text>
              </Button>);
    };

    onLoginSuccess() {
        this.setState({
            email:'',
            password: '',
            error: '',
            isLoading: false
        })
    };

    render() {
        return(
            <Card>
                <CardSection>
                    <Input isSecure={false} placeholder='user@gmail.com' label={'Email :'} value={this.state.email} onChangeText={email => this.changedTextEmail(email) }>
                    
                    </Input>
                </CardSection>

                <CardSection>
                    <Input isSecure={true} placeholder='********' label={'Password :'} value={this.state.password} onChangeText={pass => this.changedTextPassword(pass) }>
                    
                    </Input>
                </CardSection>  
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'   
    }
};