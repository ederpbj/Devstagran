import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
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

    this.signUpAction = this.signUpAction.bind(this);
  }

  signUpAction() {
    //Navega para SignUp
    this.props.navigation.navigate('SignUp');
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

        <TouchableHighlight
          onPress={() => {}}
          style={styles.actionButton}
          underlayColor="#307eaf">
          <Text style={styles.actionButtonText}>Fazer Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.signUpAction}
          style={styles.signButton}
          underlayColor="transparent">
          <Text style={styles.signButtonText}>
            Ainda não tem cadastro? Clique aqui
          </Text>
        </TouchableHighlight>
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
  actionButton: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  signButton: {
    width: '90%',
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  signButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
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
