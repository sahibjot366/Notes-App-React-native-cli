import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Context as NotesContext} from '../contexts/NotesContext';

const NoteCard = ({navigation, note}) => {
  const {deleteNote} = useContext(NotesContext);
  return (
    <View style={styles.parentView}>
      <Text style={styles.textStyle}>{note.title}</Text>
      <Icon
        name="delete"
        type="anticon"
        size={30}
        color="#279ed5"
        onPress={() => deleteNote(note.id)}
        style={styles.iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 60,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 5,
  },
  textStyle: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 25,
    color: '#000000',
  },
  iconStyle: {
    marginRight: 10,
  },
});

export default NoteCard;
