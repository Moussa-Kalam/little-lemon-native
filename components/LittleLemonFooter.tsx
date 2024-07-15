import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All right reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
