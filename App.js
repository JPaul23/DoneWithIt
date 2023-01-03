import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableNativeFeedback } from 'react-native';

export default function App() {
  console.log('App executed!');
  const handlePress = () => console.log('Text pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello React Native!
      </Text>
      <TouchableNativeFeedback onPress={() => console.log('Image tapped!')} >
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 70, backgroundColor: 'blue' }}></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
