import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CourseListScreen = ({ navigation }) => {
  const courses = [
    { id: '1', title: 'Khóa học IELTS Topic Vocabulary 2023', img: require("../assets/images/CourseListScreen/topic1.jpeg"), content: 'Xem video. Mỗi bài giảng sẽ đính kèm file pdf giải nghĩa các từ trong video. Các bạn đọc thật kỹ từng từ, nghĩa và ví dụ bằng tiếng Anh. Chỗ nào chưa hiểu thì xem lại phần dịch đại ý bằng tiếng Việt. Nhớ rằng câu ví dụ chính là gợi ý idea để các bạn viết bài task 2, phần lớn đều phù hợp cả trong IELTS Speaking, Writing.' },
    { id: '2', title: 'Khóa học IELTS Listening 2023', img: require("../assets/images/CourseListScreen/topic2.jpg"), content: '﻿+ Khóa học Listening online DUY NHẤT ĐI KÈM THỰC HÀNH và sửa bài chi tiết (chứ không phải chỉ học lý thuyết suông) . Khóa học ứng dụng công nghệ 4.0 thực hành trên website ieltsngocbach độc quyền đảm bảo phát huy hiệu quả tối đa' },
    { id: '3', title: 'Khóa học IELTS Writing 2023', img: require("../assets/images/CourseListScreen/topic3.png"), content: 'Khóa học IELTS Writing online của mình đã trở lại và lợi hại hơn xưa. Với khóa online này, mình sẽ hướng dẫn các bạn cách tự học IELTS Writing một cách đơn giản hiệu quả bằng các video bài giảng và giáo trình mới nhất' }, 
    { id: '4', title: 'Khóa học IELTS Speaking 2023', img: require("../assets/images/CourseListScreen/topic4.jpg"), content: 'Khóa học IELTS Speaking là khóa học kết hợp giữa thầy Ngọc Bách và thầy John, Pete - cựu giám khảo IELTS bản xứ ở UK. Đây là sự kết hợp giữa phương pháp giảng dạy đúng chuẩn theo tiêu chí chấm thi của giám khảo bản xứ như ở BC, IDP nhưng thêm cả các mẹo, phương pháp làm bài của giáo viên Việt Nam (như áp dụng template, bộ dự đoán speaking, phương pháp gom đề...) để tăng nhanh điểm thi Speaking trong thời gian ngắn' }, 
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
