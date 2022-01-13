import React, {useState, useLayoutEffect, useContext, useEffect} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';

//Components
import ScreenCreate from '../components/ScreenCreate';
import Header from '../components/Header';

//Contexts
import {Context as NotesContext} from '../contexts/NotesContext';

const EditDetailsScreen = ({route, navigation}) => {
  const {note} = route.params;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const {editNote, deleteNote} = useContext(NotesContext);

  const EditNote = () => {
    if (title != '') {
      editNote({id: note.id, title, content});
    } else {
      if (content != '') {
        editNote({id: note.id, title: 'Untitled', content});
      } else {
        deleteNote(note.id);
      }
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      EditNote,
    );
    return () => backHandler.remove();
  }, [title, content]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.iconStyle}>
            <Header type="edit" id={note.id} title={title} content={content} />
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
  parentView: {
    backgroundColor: '#AEE9FC',
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default EditDetailsScreen;
