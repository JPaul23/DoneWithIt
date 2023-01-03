import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title='Click Me!'
        color="orange"
        onPress={() =>
          Alert.alert("My title", "My Message", [
            { text: 'Yes' },
            { text: 'No' }
          ])
        }
      />
    </SafeAreaView >
  );
}

const containerStyle = { backgroundColor: 'blue' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
