import React, {useContext, useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import showMessage from '../showMessage';

//Contexts
import {Context as NotesContext} from '../contexts/NotesContext';

//Components
import ScreenCreate from '../components/ScreenCreate';

const CreateNoteScreen = ({navigation}) => {
  const {addNote} = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => {
              if (title != '') {
                addNote({title, content});
                navigation.goBack();
              } else {
                showMessage("Title can't be empty!");
              }
            }}>
            <Icon name="check" type="anticon" size={30} color="#ffffff" />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, title, content]);
  return (
    <View>
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
});

export default CreateNoteScreen;
