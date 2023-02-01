// In App.js in a new project

import * as React from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './components/DetailsScreen';

function HomeScreen({ navigation }) {
  const [user, OnChangeUser] = React.useState('Username')
  const [pwd, OnChangePwd] = React.useState('Password')

  const login = () => {
    if(user !== "Username" && pwd !== 'Password' && user !== '' && pwd !== ''){
      navigation.navigate('Details', {user: user, pwd: pwd,})
      OnChangeUser('Username')
      OnChangePwd('Password')
    }else{
      Alert.alert("Please fill all fields")
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput onChangeText={OnChangeUser}
      style={styles.input}
      value={user}
      onFocus= {() => {if(user=='Username'){OnChangeUser('')}}}
      />
      <TextInput onChangeText={OnChangePwd}
      style={styles.input}
      value={pwd}
      onFocus= {() => {if(pwd=='Password'){OnChangePwd('')}}}
      />
      <Button
        title="Log in"
        onPress={() => login()}
      />
    </View>
  );
  
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown: false}}
       />
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{headerBackVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;