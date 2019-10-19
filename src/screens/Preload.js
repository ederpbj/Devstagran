import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import {connect} from 'react-redux';
import {checkLogin} from '../actions/AuthAction';

//importar as actions (AuthActions)

export class Preload extends Component {
  static navigationOptions = {
    title: '',
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.verifyStatus = this.verifyStatus.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Carregando.... STATUS:{this.props.status}
        </Text>
      </View>
    );
  }

  verifyStatus() {
    switch (this.props.status) {
      case 1:
        //Resetando index para não voltar
        //Ir para tela Home
        //Se apertar botão voltar fecha app
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})],
          }),
        );
        break;

      case 2:
        //Manda para Login
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})],
          }),
        );

        break;
    }
  }

  //quando o componente montar
  componentDidMount() {
    this.props.checkLogin();
  }

  componentDidUpdate() {
    this.verifyStatus();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
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
const PreloadConnect = connect(
  mapStateToProps,
  {checkLogin},
)(Preload);
export default PreloadConnect;
