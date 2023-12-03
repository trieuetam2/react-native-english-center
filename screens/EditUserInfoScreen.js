// EditUserInfoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EditUserInfoScreen = ({ route }) => {
  const { courseId, courseTitle, courseImg } = route.params;

  const handleSaveChanges = () => {
    // Handle save changes logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin cá nhân</Text>

      <Image source={{ uri: courseImg }} style={styles.userImage} />
      <View>
        <Text style={styles.txtinput}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên"
          value={courseTitle}
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Đường dẫn ảnh</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập link"
          value={courseImg}
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Mật khẩu cũ</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu cũ"
        />
      </View>
      <View>
        <Text style={styles.txtinput}>Mật khẩu mới</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Lưu lại</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  txtinput: {
    marginBottom: 10,
    fontSize: 20
  },
  input: {

    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 15,
    fontSize: 20
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EditUserInfoScreen;
