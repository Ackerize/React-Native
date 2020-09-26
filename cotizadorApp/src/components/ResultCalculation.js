import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DataResult from './DataResult';

export default function ResultCalculation({values, errorMessage}) {
  const {total, interes, meses, final, finalPagar} = values;
  return (
    <View style={styles.content}>
      {final != 0 && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title={'Cantidad solicitada: '} value={`$ ${total}`} />
          <DataResult title={'Interes %: '} value={`${interes} %`} />
          <DataResult title={'Plazos: '} value={`${meses} mes(es)`} />
          <DataResult title={'Pago mensual: '} value={`$ ${final}`} />
          <DataResult title={'Total a pagar: '} value={`$ ${finalPagar}`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
},
});
