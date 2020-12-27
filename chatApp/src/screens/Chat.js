import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Header, Body, Title } from 'native-base';
import Input from '../components/Input';
import moment from 'moment';
import { map } from 'lodash';
import firebase from '../utils/firebase';
import 'firebase/database';
import Message from '../components/Message';

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const chatScrollRef = useRef();
  useEffect(() => {
    const chat = firebase.database().ref('general');
    chat.on('value', (snapshot) => {
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollRef.current.scrollTo({ y: 10000000000 });
  }, [messages]);

  const sendMessage = (message) => {
    const time = moment().format('hh:mm a');
    firebase.database().ref('general').push({ username, text: message, time });
  };

  return (
    <>
      <Header style={styles.header} iosBarStyle="ligth-content">
        <Body>
          <Title style={{ color: '#fff' }}>Chat App</Title>
        </Body>
      </Header>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollRef}>
          {map(messages, (message, index) => {
            <Message key={index} message={message} name={username} />;
          })}
        </ScrollView>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#16202b',
    textAlign: 'center',
  },
  chatView: {
    backgroundColor: '#1b2734',
  },
});
