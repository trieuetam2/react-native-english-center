import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditStudentScreen = ({ route }) => {
  const { students, studentId } = route.params;

  // Find the selected student by ID
  const selectedStudent = students.find((student) => student.id === studentId);

  // State to hold the edited student information
  const [editedStudent, setEditedStudent] = useState(selectedStudent);

  const navigation = useNavigation();

  const handleSaveChanges = () => {
    // Implement logic to save changes to the students array
    // For now, just log the edited student information
    console.log('Edited Student:', editedStudent);

    Alert.alert('Changes Saved', 'The changes have been saved successfully.');

    // Navigate back to StudentListScreen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Chi tiết học viên</Text>
        </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={editedStudent.id.toString()} // Convert to string if ID is a number
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={editedStudent.name}
        onChangeText={(name) => setEditedStudent({ ...editedStudent, name })}
      />
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={editedStudent.class}
        onChangeText={(classVal) => setEditedStudent({ ...editedStudent, class: classVal })}
      />
      <TextInput
        style={styles.input}
        placeholder="Batch"
        value={editedStudent.batch}
        onChangeText={(batch) => setEditedStudent({ ...editedStudent, batch })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enrollment Date"
        value={editedStudent.enrollmentDate}
        onChangeText={(enrollmentDate) => setEditedStudent({ ...editedStudent, enrollmentDate })}
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

export default EditStudentScreen;
