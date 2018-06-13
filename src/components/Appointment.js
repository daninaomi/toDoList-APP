import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default class Appointment extends Component {
    
    render() {
        const appointment = {
            // hour: '18:00',
            // name: 'Exercícios de física',
            tag: 'Tarefa' 
        }

        const { name, status } = this.props

        return (
            <View style={styles.description}>
                <Text style={styles.title}>{name}</Text>
                <Text>{status}</Text>
                {/* <Text>{appointment.hour}</Text> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        flex: 1,
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'teal',
        borderRadius: 5,
        padding: 10,
      },
      title: {
        fontSize: 20
      }
})