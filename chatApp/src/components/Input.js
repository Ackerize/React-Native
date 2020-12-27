import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base';

const Input = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Item>
        <InputNB
          placeholder="Ingresa el mensaje"
          style={styles.input}
          placeholderTextColor="grey"
          value={message}
          onChange={(e) => sendMessage(e.nativeEvent.text)}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Icon name="send" style={styles.iconSend} />
        </TouchableOpacity>
      </Item>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 20,
  },
  input: {
    color: '#fff',
  },
  iconSend: {
    color: '#fff',
  },
});
