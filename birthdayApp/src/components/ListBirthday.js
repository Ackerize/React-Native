import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';

const ListBirthday = () => {
    const [showList, setShowList] = useState(true);

  return (
    <View style={styles.container}>
        {showList ? (
            <>
                <Text>List</Text>
                <Text>List</Text>
                <Text>List</Text>
                <Text>List</Text>
                <Text>List</Text>
            </>
        ) : (
            <AddBirthday />
        )}
      
      <ActionBar showList={showList} setShowList={setShowList}/>
    </View>
  );
};

export default ListBirthday;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});
