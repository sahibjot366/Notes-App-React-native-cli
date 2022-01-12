import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const ScreenCreate = ({note, title, setTitle, content, setContent}) => {
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, []);
  return (
    <View style={styles.parentView}>
      <TextInput
        placeholder="Title"
        value={title}
        style={styles.titleInput}
        onChangeText={title => setTitle(title)}
      />
      <TextInput
        multiline
        value={content}
        placeholder="Start Typing"
        numberOfLines={10000}
        style={styles.contentInput}
        onChangeText={content => setContent(content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleInput: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  contentInput: {
    textAlignVertical: 'top',
    fontSize: 17,
  },
  parentView: {
    marginHorizontal: 10,
  },
});

export default ScreenCreate;