import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, TouchableOpacity, Alert } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      sex: 0,
      sexes: [
        { key: 1, gender: 'Male' },
        { key: 2, gender: 'Female' },
        { key: 3, gender: 'Other' }
      ],
      value: 5000,
      switchStatus: false
    };

    this.getName = this.getName.bind(this);
    this.getAge = this.getAge.bind(this);
  }

  getName(nameText) {
    this.setState({ name: nameText });
  }

  getAge(ageText) {
    this.setState({ age: ageText });
  }

  showAlert = () => {
    const { name, age, sexes, sex, value, switchStatus } = this.state;
    const gender = sexes[sex]?.gender || "Not specified";
    const studentStatus = switchStatus ? "Yes" : "No";

    Alert.alert(
      "Account Details",
      `Name: ${name}\nAge: ${age}\nGender: ${gender}\nLimit: R$ ${value.toFixed(2)}\nStudent: ${studentStatus}`,
      [{ text: "OK" }]
    );
  };

  render() {
    let sexesItem = this.state.sexes.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.gender} />;
    });

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

        <View style={styles.sliderContainer}>
          <Text style={styles.text}>Limit:</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={10000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="red"
            onValueChange={(selectedValue) => this.setState({ value: selectedValue })}
            value={this.state.value}
          />
          <Text style={styles.text}>R$ {this.state.value.toFixed(2)}</Text>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.text}>Are you a Student?</Text>
          <Switch
            value={this.state.switchStatus}
            onValueChange={(switchValue) => this.setState({ switchStatus: switchValue })}
          />
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.button} onPress={this.showAlert}>
            <Text style={styles.btnText}>Open Account</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20
  },
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  nameView: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  text: {
    fontSize: 20,
    textAlign: 'flex-start',
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 5,
    margin: 10,
    fontSize: 15,
    padding: 10
  },
  ageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 10
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  picker: {
    flex: 1,
    height: 60,
    marginLeft: 10
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  slider: {
    flex: 1,
    height: 40
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    width: 100,
    height: 40
  },
  btnView: {
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  btnText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold'
  }
});

export default App;
