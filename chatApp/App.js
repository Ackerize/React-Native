import React, { useState } from 'react';
import { StyleSheet, LogBox, StatusBar } from 'react-native';
import { Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

LogBox.ignoreAllLogs(true);

const App = () => {
  const [username, setUsername] = useState(null);
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Container style={styles.container}>
        {!username ? (
          <Login setUsername={setUsername} />
        ) : (
          <Chat username={username} />
        )}
      </Container>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
  },
});
