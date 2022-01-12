import React, {useState, useContext, useLayoutEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import showMessage from '../showMessage';
//Contexts
import {Context as NotesContext} from '../contexts/NotesContext';

//Components
import ScreenCreate from '../components/ScreenCreate';

const EditDetailsScreen = ({route, navigation}) => {
  const {editNote} = useContext(NotesContext);
  const {note} = route.params;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => {
              if (title != '') {
                editNote({id: note.id, title, content});
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
  parentView: {},
  iconStyle: {
    marginRight: 10,
  },
});

export default EditDetailsScreen;
