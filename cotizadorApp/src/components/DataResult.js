import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DataResult = ({title, value}) => {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default DataResult;

const styles = StyleSheet.create({
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    }
});
