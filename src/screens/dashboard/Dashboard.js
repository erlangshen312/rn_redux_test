import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Dashboard() {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Dashboard</Text>
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
