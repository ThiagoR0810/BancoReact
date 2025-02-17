import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      sex: 0,
      sexes: [
        {key: 1, gender: 'Male'},
        {key: 2, gender: 'Female'},
        {key: 3, gender: 'Other'}
      ]
    };

    this.getName = this.getName.bind(this);
  }

  getName(nameText) {
    if (nameText.length > 0) {
      this.setState({name: nameText});
    } else {
      this.setState({name: ''});
    }
  }

  getAge(ageText) {
    if (ageText.length > 0) {
      this.setState({age: ageText});
    } else {
      this.setState({age: ''});
    }
  }

  render() { 

    let sexesItem = this.state.sexes.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.gender}/>
    })

    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to React Bank!</Text>
        </View>

        <View style={styles.nameView}>
          <Text style={styles.text}>Name: </Text>
          <TextInput
            style={styles.input}
            placeholder="Type your name"
            underlineColorAndroid="transparent"
            onChangeText={this.getName}
          />
        </View>

        <View style={styles.ageView}>
          <Text style={styles.text}>Age: </Text>
          <TextInput
            style={styles.input}
            placeholder="Type your age"
            underlineColorAndroid="transparent"
            onChangeText={this.getAge}
          />
        </View>

        <View style={styles.pickerContainer}>
          
          <Text style={styles.text}>Gender: </Text>
          <Picker
          selectedValue={this.state.sex}
          onValueChange={(itemValue) => this.setState({ sex: itemValue })}
          style={styles.picker}
          >
            {sexesItem}
          </Picker>


        </View>

        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },
  titleView:{
    alignItems: 'center'
  },
  nameView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  text:{
    fontSize: 20,
    textAlign: 'flex-start', 
  },
  input:{
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10
  },
  ageView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  pickerContainer: {
    flexDirection: 'row', // Coloca os itens na mesma linha
    alignItems: 'center', // Alinha verticalmente ao centro
    marginLeft: 10,
  },
  picker: {
    flex: 1, // Faz o Picker ocupar o espaço restante
    height: 60,
    marginLeft: 10
  },

});

export default App;
