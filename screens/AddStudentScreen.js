import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddStudentScreen = ({}) => {
  const navigation = useNavigation();

  const handleSaveChanges = () => {

    Alert.alert('Changes Saved', 'The changes have been saved successfully.');

    // Navigate back to StudentListScreen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Thêm mới học viên</Text>
        </View>
      </View>

      {/* <TextInput
        style={styles.input}
        placeholder="ID"
        
        editable={false}
      /> */}
      <TextInput
        style={styles.input}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
      />
      <TextInput
        style={styles.input}
        placeholder="Batch"
      />
      <TextInput
        style={styles.input}
        placeholder="Enrollment Date"
      />

      <Button title="Lưu thay đổi" onPress={handleSaveChanges} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  container1: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
    fontSize: 20,
  },
});

export default AddStudentScreen;
