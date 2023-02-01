import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Send" onPress={() => send()}/>
      <Button title="post" style={{marginTop: 50}} onPress={() => post()}/>
      <StatusBar style="auto" />
    </View>
  );
}

const send = async () => {
  await fetch('http://87.100.200.233:3001/', {
  }).then(res=>res.json())
  .then(data=> { console.log(data); })
  .catch((err) => {
    console.log(err)
  })
}

const post = async () => {

  await fetch('http://87.100.200.233:3001/a', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({answer:42})
  }).then(res=>res.json())
  .then(data=> { console.log(data); })
  .catch((err) => {
    console.log(err)
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    marginTop: 50
  }
});

