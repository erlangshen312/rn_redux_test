import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Dashboard() {
  const {container} = styles;
  return (
    <View style={container}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
