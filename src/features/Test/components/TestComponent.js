import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTest } from '../test.store';
import { decrementCount, incrementCount } from '../test.controller';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Test = () => {
  const [countValue] = useTest('counter');

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        count : {countValue}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={incrementCount}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrementCount}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Test;
