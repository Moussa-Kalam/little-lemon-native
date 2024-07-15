import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }} indicatorStyle={'white'}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#EDEFEE',
          textAlign: 'center',
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text
        style={{
          fontSize: 24,
          padding: 20,
          marginVertical: 8,
          color: '#EDEFEE',
          textAlign: 'center',
        }}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment.We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}
