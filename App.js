import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, DrawerLayoutAndroid, StyleSheet, View, Text } from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import DrawerScreen from './app/screens/DrawerScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const drawer = useRef(null);

  const handleNavigate = () => {
    navigation.navigate('Image', { name: 'Drawer' })
    log.info("Navigated From Drawer");
  }

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Go to Image"
        onPress={handleNavigate}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={({ navigation, route }) => ({
              title: 'Welcome',
              headerStyle: {
                backgroundColor: 'tomato',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              // Add a placeholder button without the `onPress` to avoid flicker
              headerLeft: () => (
                <Button title="DRWR" />
              ),
            })}
          />
          <Stack.Screen
            name="Image"
            component={ViewImageScreen}
            options={{ title: 'Image Screen' }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});
