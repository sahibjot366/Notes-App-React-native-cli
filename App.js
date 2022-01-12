import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import DisplayNotesScreen from './src/screens/DisplayNotesScreen';
import EditDetailsScreen from './src/screens/EditDetailsScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';

//Providers
import {Provider as NotesProvider} from './src/contexts/NotesContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#279ed5',
          },
          headerTintColor: '#ffffff',
        }}>
        <Stack.Screen
          name="Notes"
          component={DisplayNotesScreen}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Edit Note" component={EditDetailsScreen} />
        <Stack.Screen name="Create a Note" component={CreateNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
  },
});

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  );
};
