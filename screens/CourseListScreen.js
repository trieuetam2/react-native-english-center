import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CourseListScreen = ({ navigation }) => {
  const courses = [
    { id: '1', title: 'React Native Basics', img: require("../assets/images/CourseListScreen/iphoneX.jpg"), content: 'Learn the fundamentals of React Native.' },
    { id: '2', title: 'Advanced JavaScript', img: require("../assets/images/CourseListScreen/iphone-12.jpg"), content: 'Deep dive into advanced JavaScript concepts.' },
    { id: '3', title: 'Mobile App Design', img: require("../assets/images/CourseListScreen/iPhone6.png"), content: 'Explore principles and techniques of mobile app design.' }, 
    // Add more courses as needed
  ];

  const handleCoursePress = (courseId, courseTitle, courseImg, courseContent) => {
    navigation.navigate('CourseDetails', { courseId, courseTitle, courseImg, courseContent });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCoursePress(item.id, item.title, item.img, item.content)}>
      <View style={styles.courseItem}>
        <Image source={item.img} style={styles.courseImage} />
        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>{item.title}</Text>
          {/* <Text style={styles.courseTitle}>{item.content}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Danh sách khóa học</Text>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#f5f5f5',
  },
  txtTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    overflow: 'hidden', // Clip the border radius overflow
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  courseDetails: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseContent: {
    fontSize: 16,
    color: '#555',
  },
});

export default CourseListScreen;
