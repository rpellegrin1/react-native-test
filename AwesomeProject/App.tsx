// Import necessary components from React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

// Define the screens (which do nothing). 
//! I do not see a reason to split these four empty screens into separate files.
function Screen1() {
  return null; // Blank screen
}

function Screen2() {
  return null; // Blank screen
}

function Screen3() {
  return null; // Blank screen
}

function Screen4() {
  return null; // Blank screen
}

// Set up the tab navigator
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        <Tab.Screen name="Screen4" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
