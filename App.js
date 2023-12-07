import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import CourseListScreen from './screens/CourseListScreen';
import StudentListScreen from './screens/StudentListScreen';
import StudentListPayScreen from './screens/StudentListPayScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import CalendarSreen from './screens/CalendarScreen';
import ForgotPassScreen from './screens/ForgotPassScreen';
import EditStudentScreen from './screens/EditStudentScreen';
import AddStudentScreen from './screens/AddStudentScreen';
import EditUserInfoScreen from './screens/EditUserInfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Signup" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Trang chủ" component={CalendarSreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const SettingsUser = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thông tin cá nhân" component={UserInfoScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={RegisterScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
      <Stack.Screen name="Edituser" component={EditUserInfoScreen} />
      <Stack.Screen name="Thu học phí" component={StudentListPayScreen} />
    </Stack.Navigator>
  );
};
const SettingsStudentListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Student" component={StudentListScreen} options={{headerShown: false,}} />
      <Stack.Screen name="EditStudent" component={EditStudentScreen} />
      <Stack.Screen name="AddStudent" component={AddStudentScreen} />
    </Stack.Navigator>
  );
};
const SettingsCourseDetails = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CourseList" component={CourseListScreen} options={{headerShown: false,}} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => (
  <Tab.Navigator>
     <Tab.Screen
      name="Trang chủ"
      component={AuthStack}
      options={{
        tabBarLabel: 'Trang Chủ',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Khóa Học"
      component={SettingsCourseDetails}
      options={{
        tabBarLabel: 'Khóa học',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="book" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Danh sách học viên"
      component={SettingsStudentListScreen}
      options={{
        tabBarLabel: 'Ds học viên',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="people" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen name="Settings" component={SettingsUser} 
     options={{
      tabBarLabel: 'Cá nhân',
      headerShown: false,
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name="person" color={color} size={size} />
      ),
    }} />


  </Tab.Navigator>
);


export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}