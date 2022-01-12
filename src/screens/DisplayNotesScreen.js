import React, {useEffect, useContext, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context as NotesContext} from '../contexts/NotesContext';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  AppState,
} from 'react-native';
import NoteCard from '../components/NoteCard';

const DisplayNotesScreen = ({navigation}) => {
  const appState = useRef(AppState.currentState);
  const {state, getNotes} = useContext(NotesContext);
  useEffect(() => {
    getNotes();
  }, []);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          nextAppState.match(/inactive|background/) &&
          appState.current === 'active'
        ) {
          await AsyncStorage.setItem('notes', JSON.stringify(state));
        }
        appState.current = nextAppState;
      },
    );
    return () => {
      subscription.remove();
    };
  }, [state]);

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
