import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

  render() { 
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to React Bank!</Text>
        </View>

        <View style={styles.nameView}>
          <Text style={styles.nameText}>Name: </Text>
          <TextInput
            style={styles.nameInput}
            placeholder="Type your name"
            underlineColorAndroid="transparent"
            onChangeText={this.getName}
          />
        </View>

        <View style={styles.ageView}>
          <Text style={styles.ageText}>Age: </Text>
          <TextInput
            style={styles.ageInput}
            placeholder="Type your age"
            underlineColorAndroid="transparent"
            onChangeText={this.getName}
          />
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
  nameText:{
    fontSize: 20,
    textAlign: 'center'
  },
  nameInput:{
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
  ageText:{
    fontSize: 20,
    textAlign: 'center'
  },
  ageInput:{
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10
  }
});

export default App;
