import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
    { id: '1', day: 'Thứ 2', type: 'odd', weeklySchedule1: 'Toeic 500+', weeklySchedule2: 'Toeic 500+' },
    { id: '2', day: 'Thứ 3', type: 'even', weeklySchedule1: 'Speaking with local people', weeklySchedule2: 'Ielts speaking test' },
    { id: '3', day: 'Thứ 4', type: 'odd', weeklySchedule1: 'Ielts speaking test', weeklySchedule2: 'Ielts speaking test' },
    { id: '4', day: 'Thứ 5', type: 'even', weeklySchedule1: 'Ielts band 5.0+', weeklySchedule2: 'Ielts band 5.0+' },
    { id: '5', day: 'Thứ 6', type: 'odd', weeklySchedule1: 'Toeic Speaking Test', weeklySchedule2: 'Ielts band 5.0+' },
    { id: '6', day: 'Thứ 7', type: 'even', weeklySchedule1: 'Ielts speaking test', weeklySchedule2: 'Toeic Speaking Test' },
    // Add more data for other days
  ];

const CalendarScreen = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: item.type === 'odd' ? '#ddd' : '#ffffff' }]}>
      <Text style={styles.txtDay}>{item.day}</Text>
      <Text style={styles.txtDay}>{selectedWeek === 1 ? item.weeklySchedule1 : item.weeklySchedule2}</Text>
    </View>
  );

  const renderWeeklySchedule = () => (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Thời khóa biểu</Text>
      <View style={styles.weekSelector}>
        <TouchableOpacity onPress={() => setSelectedWeek(1)}>
          <Text style={[styles.weekButton, selectedWeek === 1 && styles.selectedWeek]}>Tuần này</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedWeek(2)}>
          <Text style={[styles.weekButton, selectedWeek === 2 && styles.selectedWeek]}>Tuần kế</Text>
        </TouchableOpacity>
        {/* Add more buttons for additional weeks as needed */}
      </View>
      {renderWeeklySchedule()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  txtDay: {
    fontSize: 20,
  },
  weekSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekButton: {
    fontSize: 18,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  selectedWeek: {
    backgroundColor: '#ddd',
  },
});

export default CalendarScreen;
