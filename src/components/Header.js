import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

//Contexts
import {Context as NotesContext} from '../contexts/NotesContext';

const Header = ({type, id, title, content}) => {
  const {editNote, addNote, deleteNote} = useContext(NotesContext);
  const navigation = useNavigation();

  const titleAndContent = () => {
    if (title != '') {
      return {title, content};
    } else {
      if (content != '') return {title: 'Untitled', content};
      else return null;
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          const values = titleAndContent();
          if (type == 'add') {
            if (values) {
              addNote({title: values.title, content: values.content});
            }
          } else {
            if (values) {
              editNote({id, title: values.title, content: values.content});
            } else {
              deleteNote(id);
            }
          }
          navigation.goBack();
        }}>
        <Icon name="check" type="anticon" size={30} color="#ffffff" />
      </TouchableOpacity>
    </>
  );
};

export default Header;
