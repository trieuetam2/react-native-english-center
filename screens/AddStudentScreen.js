// AddStudentScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddStudentScreen = ({ navigation, route }) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    class: '',
    batch: '',
    enrollmentDate: '',
    status: '',
  });

  const handleAddStudent = () => {
    // Validation: Ensure all fields are filled
    if (
      newStudent.name === '' ||
      newStudent.class === '' ||
      newStudent.batch === '' ||
      newStudent.enrollmentDate === '' ||
      newStudent.status === ''
    ) {
      // Display an error message or alert
      alert('Please fill in all fields');
      return;
    }
    route.params.addNewStudent(newStudent);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Student</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={newStudent.name}
        onChangeText={(text) => setNewStudent({ ...newStudent, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={newStudent.class}
        onChangeText={(text) => setNewStudent({ ...newStudent, class: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Batch"
        value={newStudent.batch}
        onChangeText={(text) => setNewStudent({ ...newStudent, batch: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enrollment Date"
        value={newStudent.enrollmentDate}
        onChangeText={(text) => setNewStudent({ ...newStudent, enrollmentDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={newStudent.status}
        onChangeText={(text) => setNewStudent({ ...newStudent, status: text })}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddStudent}>
        <Text style={styles.addButtonText}>Add Student</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddStudentScreen;
