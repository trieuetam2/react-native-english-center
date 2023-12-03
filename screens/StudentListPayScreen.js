import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Modal, Pressable } from 'react-native';

const StudentListPayScreen = () => {


  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [amount, setAmount] = useState('');

  const students = [
    { id: '1', name: 'John Doe', class: 'Class A', batch: 'Batch 2023', enrollmentDate: '2023-01-01' },
    { id: '2', name: 'Jane Smith', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '3', name: 'Jane Smith 2', class: 'Class C', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '4', name: 'Jane Smith 4', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '5', name: 'Jane Smith 5', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '6', name: 'Jane Smith 6', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '7', name: 'Jane Smith 7', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
    { id: '8', name: 'Jane Smith 8', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15' },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    toggleModal();
  };

  const handleCollectFee = () => {
    if (!selectedStudent) {
      Alert.alert('Lỗi', 'Vui lòng chọn học viên cần thu phí.');
      return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      Alert.alert('Lỗi', 'Vui lòng nhập số tiền hợp lệ.');
      return;
    }

    // Implement logic to collect fee (e.g., send data to server)
    Alert.alert('Thu học phí', `Đã thu thành công ${amount} đồng cho học viên ${selectedStudent.name}.`);

    // Reset the form after successful collection
    setSelectedStudent(null);
    //setAmount('');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thu Học Phí</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Chọn Học Viên:</Text>
        <Pressable onPress={toggleModal}>
          <View style={styles.selectedStudentContainer}>
            <Text>{selectedStudent ? selectedStudent.name + ' ' + selectedStudent.class : 'Bấm để chọn học viên'}</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số tiền:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số tiền"
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>

      <Button title="Thu Phí" onPress={handleCollectFee} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {students.map((student) => (
              <Pressable
                key={student.id}
                style={styles.modalItem}
                onPress={() => handleSelectStudent(student)}
              >
                <Text>{student.name}</Text>
                <Text>{student.class}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  selectedStudentContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default StudentListPayScreen;
