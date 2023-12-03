import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const CourseDetailsScreen = ({ route }) => {
  // Lấy dữ liệu khóa học từ tham số định tuyến
  const { courseId, courseTitle, courseImg, courseContent } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.courseTitle}>{courseTitle}</Text>
      <Image source={courseImg} style={styles.courseImage} />
      <Text style={styles.courseContent}>{courseContent}</Text>

      <View style={styles.footer}>
         
          <View style={styles.btnAddtocart}>
              <Text style={styles.addCart}>Học thử</Text>
          </View>
      </View>

    </ScrollView>

    
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
        width: '100%',
        backgroundColor: '#fff',
        padding: 20,
        fontSize: 30,
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
        height: 300,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: 20,
        marginBottom: 20
      },
      courseDetails: {
        padding: 16,
      },
      courseTitle: {
        backgroundColor: '#fff',
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      courseContent: {
        fontSize: 25,
        color: '#555',
        lineHeight: 50
      },
          footer: {
            height: 100,
            flexDirection: 'row',
            alignItems: 'center'
          },
          btnAddtocart: {
              height: 65,
              flex: 1,
             
              backgroundColor: '#00cccc',
              justifyContent: 'center',
              borderRadius: 16,
              marginBottom: 25
          },
          addCart: {
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff'
          }
  // Thêm các kiểu dáng khác tùy thuộc vào nhu cầu
});

export default CourseDetailsScreen;
