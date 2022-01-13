import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const ScreenCreate = ({title, setTitle, content, setContent}) => {
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
        placeholder="Start Typing ..."
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
