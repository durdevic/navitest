import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// You can import from local files


// or any pure javascript modules available in npm


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FolderListScreen"
        headerMode="none"
        mode="card"
        screenOptions={{
          gestureEnabled: true,
          // if you want to change the back swipe width
          gestureDirection: 'horizontal',
          gestureResponseDistance: {
            horizontal: 300,
          },
          cardStyleInterpolator: ({ current, next, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            };
          },
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen2')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableOpacity onPress={() => {
      navigation.goBack();
    }}>
      <Text>Go back</Text>
    </TouchableOpacity>
      <Text>hello again</Text>
    </View>
  );
}
