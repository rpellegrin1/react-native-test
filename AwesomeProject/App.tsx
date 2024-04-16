import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

// Create a context to hold the shared data
const SharedDataContext = createContext(null);

// Define the screens
function HomeScreen({ navigation }) {
  const { data, setData } = useContext(SharedDataContext); // Access shared data

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
          setData({ screen: 'Screen 2', message: 'Hello from HomeScreen' });
        }}
      />
    </View>
  );
}

function Screen2() {
  const { data } = useContext(SharedDataContext); // Access shared data
  if (!data) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{data.message}</Text>
    </View>
  );
}

function Screen3() {
  return null;
}

function Screen4() {
  return null;
}

function App() {
  const [data, setData] = useState(null); // State to hold shared data

  return (
    <NavigationContainer>
      <SharedDataContext.Provider value={{ data, setData }}>
        <Tab.Navigator initialRouteName="Screen1">
          <Tab.Screen name="Screen1" component={HomeScreen} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4" component={Screen4} />
        </Tab.Navigator>
      </SharedDataContext.Provider>
    </NavigationContainer>
  );
}

export default App;
