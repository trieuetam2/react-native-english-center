import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#00cccc',
        padding: 20,
        borderRadius: 100,
        marginBottom: 30,
        marginTop: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 25,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
