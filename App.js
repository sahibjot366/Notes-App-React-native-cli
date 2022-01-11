import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.parentView}>
      <Text>Notes App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    alignItems: 'center',
  },
});

export default App;
