import React, { useState, useCallback  } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";

const StudentListScreen = ({navigation}) => {
  const [students, setStudents] = useState([
    { id: '1', name: 'Nguyễn Văn Sáng', class: 'Class A', batch: 'Batch 2023', enrollmentDate: '2023-01-01', status: 'đã thu phí'  },
    { id: '2', name: 'Bùi Văn Việt', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
    { id: '3', name: 'Nguyễn Thị Tâm', class: 'Class C', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
    { id: '4', name: 'Đào Hồng Huy', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
    { id: '5', name: 'Lê Bá Giang', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
    { id: '6', name: 'Huỳnh Công Mạnh', class: 'Class E', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
    { id: '7', name: 'Phan Văn Trí', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
    { id: '8', name: 'Hoàng Thị Quỳnh', class: 'Class E', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí'  },
    // Add more students as needed
  ]);

  const [visibleStudents, setVisibleStudents] = useState(5); // Số lượng học viên hiển thị ban đầu
  const [searchText, setSearchText] = useState('');

  const updateStudentInfo = useCallback((editedStudent) => {
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.map((student) =>
        student.id === editedStudent.id ? editedStudent : student
      );
      return updatedStudents;
    });
  }, [students]);
  
  // StudentListScreen.js
  const handleAddStudent = () => {
    navigation.navigate('AddStudent', {
      addNewStudent: (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, { ...newStudent, id: (prevStudents.length + 1).toString() }]);
      },
    });
  };


  const handleEditStudent = (id) => {
    // Navigate to the EditStudent screen with the student ID as a parameter
    navigation.navigate('EditStudent', { studentId: id, students, updateStudentInfo });
  };

  const handleDeleteStudent = (id) => {
    // Find the student to be deleted
    const studentToDelete = students.find((student) => student.id === id);

    // Display confirmation alert
    Alert.alert(
      'Delete Student',
      `Are you sure you want to delete ${studentToDelete.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            // Remove the student from the state
            const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);

            // Display success message
            Alert.alert('Delete Student', `Student ${studentToDelete.name} has been deleted successfully.`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handleShowMore = () => {
    setVisibleStudents((prevVisibleStudents) => prevVisibleStudents + 5);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  
    // If the search text is empty, reset the list to the original list of students
    if (text === '') {
      setStudents([
        { id: '1', name: 'Nguyễn Văn Sáng', class: 'Class A', batch: 'Batch 2023', enrollmentDate: '2023-01-01', status: 'đã thu phí'  },
        { id: '2', name: 'Bùi Văn Việt', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
        { id: '3', name: 'Nguyễn Thị Tâm', class: 'Class C', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
        { id: '4', name: 'Đào Hồng Huy', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
        { id: '5', name: 'Lê Bá Giang', class: 'Class D', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí' },
        { id: '6', name: 'Huỳnh Công Mạnh', class: 'Class E', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
        { id: '7', name: 'Phan Văn Trí', class: 'Class B', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'đã thu phí'  },
        { id: '8', name: 'Hoàng Thị Quỳnh', class: 'Class E', batch: 'Batch 2022', enrollmentDate: '2022-12-15', status: 'chưa thu phí'  },
      ]);
      setVisibleStudents(5);
      return;
    }
  
    const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(text.toLowerCase())
  );
  
    // Update the visible students and reset to the initial state
    setVisibleStudents(5);
    setStudents(filteredStudents);
  };
  
  

  const renderItem = ({ item, index }) => (
    <View style={[styles.studentItem, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
      <Text style={styles.studentName}>{item.name}</Text>
      <Text style={styles.studentInfo}>{`Lớp: ${item.class}`}</Text>
      <Text style={styles.studentInfo}>{`Khóa: ${item.batch}`}</Text>
      <Text style={styles.studentInfo}>{`Ngày đến trung tâm: ${item.enrollmentDate}`}</Text>
      <Text style={{fontSize: 16}}>
        <Text style={{ color: 'black' }}>Tình trạng: </Text>
        <Text style={{ color: item.status === 'đã thu phí' ? 'green' : 'red', fontWeight: 'bold' }}>
          {item.status}
        </Text>
      </Text>

      <View style={styles.studentActions}>
        <TouchableOpacity onPress={() => handleEditStudent(item.id)}>
          <MaterialIcons name="edit" size={24} color="#333" style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteStudent(item.id)}>
          <MaterialIcons name="delete" size={24} color="#333" style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Danh sách học viên</Text>
        <TouchableOpacity onPress={handleAddStudent}>
          <MaterialIcons name="add" size={30} color="#333" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.boxSearch}>
          <Icon name={'ios-search'} size={24} color={'#000000'} style={styles.searchIcon} />
          <TextInput
            style={styles.txtSearch}
            placeholder="Tìm kiếm"
            placeholderTextColor="#888"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={students.slice(0, visibleStudents)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {visibleStudents < students.length && (
        <TouchableOpacity style={styles.showMoreButton} onPress={handleShowMore}>
          <Text style={styles.showMoreButtonText}>Hiển thị thêm</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff'

  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    marginLeft: 16,
    fontWeight: 'bold'
  },
  studentItem: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  studentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  studentInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  studentActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  actionIcon: {
    marginLeft: 16,
  },
  containerSearch: {
    marginBottom: 16,
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  txtSearch: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  evenItem: {
    backgroundColor: '#fff', // Màu của các mục vị trí chẵn
  },
  oddItem: {
    backgroundColor: '#ddd', // Màu của các mục vị trí lẻ
  },
  showMoreButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 30
  },
  showMoreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default StudentListScreen;
