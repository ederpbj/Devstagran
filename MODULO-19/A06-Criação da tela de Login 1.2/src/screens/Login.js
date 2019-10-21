import React, {Component} from 'react';
import {Text, TextInput, StyleSheet, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {checkLogin} from '../actions/AuthAction';

export class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/bg.jpg')}
        style={styles.container}>
        <Text style={styles.logo}>Devstaran</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#FFFFFF"
          underlineColorAndroid="#FFFFFF"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#FFFFFF"
          underlineColorAndroid="#FFFFFF"
          secureTextEntry={true}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 25,
  },
  logo: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
    width: '90%',
    height: 40,
    //Transparência 15% como background
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 17,
  },
});

//Transforma state em props para enviar para redux
const mapStateToProps = state => {
  return {
    status: state.auth.status,
  };
};

//Criar o connect com redux
//checkLogin vem do action
const LoginConnect = connect(
  mapStateToProps,
  {checkLogin},
)(Login);
export default LoginConnect;
