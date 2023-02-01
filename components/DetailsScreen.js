import * as React from 'react';
import { View, Text, Button } from 'react-native';


function DetailsScreen({ route, navigation}) {
    const {user, pwd} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registered username: {JSON.stringify(user)}</Text>
        <Text>Registered username: {JSON.stringify(pwd)}</Text>
      </View>
    );
  }

  export default DetailsScreen;