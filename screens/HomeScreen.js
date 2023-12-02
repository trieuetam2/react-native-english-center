import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  // Dummy data for courses
  const courses = [
    { id: '1', title: 'React Native Basics', img: require("../assets/iphoneX.jpg"), content: 'Learn the fundamentals of React Native.' },
    { id: '2', title: 'Advanced JavaScript', img: require("../assets/iphone-12.jpg"), content: 'Deep dive into advanced JavaScript concepts.' },
    { id: '3', title: 'Mobile App Design', img: require("../assets/iPhone6.png"), content: 'Explore principles and techniques of mobile app design.' }, 
  ];
  

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Image source={item.img} style={styles.courseImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtTitle}>Danh sách khóa học</Text>
      </View>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  courseItem: {
    marginBottom: 16,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseImage: {
    width: '100%', // Kích thước chiều rộng là 100% của phần tử cha
    height: 200,    // Chiều cao cố định (có thể điều chỉnh tùy ý)
    borderRadius: 8, // Bo tròn góc nếu muốn
    marginTop: 10,   // Khoảng cách giữa văn bản và hình ảnh
  },
});

export default HomeScreen;
