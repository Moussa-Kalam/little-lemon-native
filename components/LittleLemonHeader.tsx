import React from 'react';
import { Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: '#F4CE14', marginBottom: 10 }}>
      <Text
        style={{
          paddingTop: 40,
          paddingBottom: 20,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}
