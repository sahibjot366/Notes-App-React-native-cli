import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DisplayNotesScreen = ({navigation}) => {
  return (
    <View style={styles.parentView}>
      <Text>Display Notes Here</Text>
      <Button title="Edit screen" onPress={() => navigation.navigate('Edit')} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {},
});

export default DisplayNotesScreen;
