import React, {useLayoutEffect, useState, useContext, useEffect} from 'react';
import {StyleSheet, View, BackHandler} from 'react-native';

//Components
import ScreenCreate from '../components/ScreenCreate';
import Header from '../components/Header';

//Contexts
import {Context as NotesContext} from '../contexts/NotesContext';

const CreateNoteScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addNote} = useContext(NotesContext);

  const AddNote = () => {
    if (title != '') {
      addNote({title, content});
    } else {
      if (content != '') {
        addNote({title: 'Untitled', content});
      }
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      AddNote,
    );
    return () => backHandler.remove();
  }, [title, content]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.iconStyle}>
            <Header type="add" title={title} content={content} />
          </View>
        );
      },
    });
  }, [navigation, title, content]);

  return (
    <View style={styles.parentView}>
      <ScreenCreate
        title={title}
        setTitle={title => setTitle(title)}
        content={content}
        setContent={content => setContent(content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    marginRight: 10,
  },
  parentView: {
    backgroundColor: '#AEE9FC',
  },
});

export default CreateNoteScreen;
