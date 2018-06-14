
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import Appointment from '../components/Appointment'


export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      tarefas: [],
      msg: '',
      hour: '20h'
    }
  }

  componentDidMount() {
    return fetch('http://10.20.105.240:3000/tasks')
      .then(res => res.json())
      .then(json => this.setState({
        tarefas: json
        // msg: 'entrou no segundo then!!!'
      }))
      .catch(erro => {
        this.setState({
          msg: 'entrou na msg de erro'
        })
      })
  }

  onPress = () => {
    // alert('clicooo')
    this.props.navigation.navigate('AddAppointment')
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>
          Bem-vindo(a) !
        </Text>

        <FlatList style={styles.list}
          keyExtractor={item => item._id}
          data={this.state.tarefas}
          renderItem={({ item }) =>

            <Appointment name={item.name} status={item.status} />

          }
        />

        <TouchableOpacity style={styles.buttonPrimary}
          onPress={this.onPress}>
          <Text style={styles.textButton}>Novo Compromisso</Text>
        </TouchableOpacity>


        {/* <Text style={styles.day}>{this.state.msg}</Text> */}

      </ScrollView>
    );
  }
}

// export default createStackNavigator({
//     Home: {
//       screen: HomeScreen
//     },
//   });

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    margin: 15,
    marginTop: 50,
    color: 'grey'
  },
  list: {
    margin: 15
  },
  dayComplete: {
    display: 'flex'
  },
  dayAndMonth: {
    width: 50
  },
  day: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonPrimary: {
    padding: 20,
    margin: 15,
    borderRadius: 10,
    backgroundColor: 'teal'
  },
  textButton: {
    color: 'white',
    textAlign: 'center'
  }
});


// const compromissos = [
//   {
//     id: 1,
//     dia: '12',
//     mes: 'mar',
//     descricao: 'Criar app React Native'
//   },
//   {
//     id: 1,
//     dia: '13',
//     mes: 'mar',
//     descricao: 'Usar API do Node pra nossa App '
//   }
// ]

// <FlatList style={styles.list}
//           keyExtractor={item => item.id}
//           data={compromissos}
//           renderItem={({ item }) =>

//             <View style={styles.dayComplete}>
//               <View style={styles.dayAndMonth}>
//                 <Text style={styles.day}>{item.dia}</Text>
//                 <Text>{item.mes}</Text>
//               </View>

//               <View style={styles.description}>
//                 <Text>{item.descricao}</Text>
//               </View>

//             </View>
//           }
//         /> 