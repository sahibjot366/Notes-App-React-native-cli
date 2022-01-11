import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import DisplayNotesScreen from './src/screens/DisplayNotesScreen';
import EditDetailsScreen from './src/screens/EditDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Display" component={DisplayNotesScreen} />
        <Stack.Screen name="Edit" component={EditDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
  },
});

export default App;
