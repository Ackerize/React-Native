import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

const { PRIMARY_COLOR, PRIMARY_COLOR_DARK } = colors;

const App = () => {

  const [values, setValues] = useState({
    total: 0,
    interes: 0,
    meses: 0,
    final: 0,
    finalPagar : 0
  })
  const [error, setError] = useState('');

  const {total, interes, meses} = values;

  useEffect(() => {
    if(total && interes && meses) onSubmit();
    else reset();
  }, [total, interes, meses])

  const onSubmit = () =>{
    reset();
    console.log(values);
    if(total && interes && meses){
      const i = interes / 100;
      const fee = total / ((1 - Math.pow(i + 1, -meses)) / i);
      setValues(value => ({
        ...value,
        final: fee.toFixed(2).replace('.', ','),
        finalPagar: (fee * meses).toFixed(2).replace('.', ',')
      }))
    }else{
      setError('Hay campos vacios');
    }
  }

  const reset = () => {
    setError('');
    setValues(value => ({
      ...value,
      final: 0
    }))
  }

  return (
    <>
    <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form setValues={setValues} />
      </SafeAreaView>
      <ResultCalculation errorMessage={error} values={values} />
      <Footer onSubmit={onSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background:{
    backgroundColor: PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1
  },
  titleApp:{
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    marginTop: 15
  }
})

export default App;
