import {Platform, ToastAndroid} from 'react-native';

export default message => {
  if (Platform.OS == 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    alert(message);
  }
};
