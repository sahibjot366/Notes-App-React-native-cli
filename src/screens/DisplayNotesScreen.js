import React, {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context as NotesContext} from '../contexts/NotesContext';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  AppState,
  ToastAndroid,
} from 'react-native';
import NoteCard from '../components/NoteCard';

const DisplayNotesScreen = ({navigation}) => {
  const {state, getNotes} = useContext(NotesContext);
  useEffect(() => {
    getNotes();
    AppState.addEventListener('blur', () => {
      ToastAndroid.show('Changed', ToastAndroid.SHORT);
    });
  }, []);

  return (
    <View style={styles.parentView}>
      <FlatList
        data={state.notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Edit Note', {
                  note: item,
                })
              }>
              <NoteCard note={item} />
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => navigation.navigate('Create a Note')}>
        <Image source={require('../assets/plus.png')} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
    backgroundColor: '#D0D3D4',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  imgStyle: {
    height: 70,
    width: 70,
  },
});

export default DisplayNotesScreen;
