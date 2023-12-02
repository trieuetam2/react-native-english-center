import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import home from './screens/HomeScreen';
import AddFruit from './screens/addFruit';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import CourseListScreen from './screens/CourseListScreen';
import StudentListScreen from './screens/StudentListScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import CalendarSreen from './screens/CalendarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
       <Stack.Screen name={'AddFruit'} component={AddFruit}    options={{
            headerShown: false
          }} />
           <Stack.Screen
          name="Home"
          component={home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CourseList"
          component={CourseListScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="StudentList"
          component={StudentListScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="UserInfo"
          component={UserInfoScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarSreen}
          options={{
            headerShown: false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}