import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#F4CE14', marginBottom: 10 },
  headerText: {
    paddingTop: 40,
    paddingBottom: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
