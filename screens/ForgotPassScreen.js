import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InputField from '../constants/InputField';
import CustomButton from '../constants/CustomButton';


const ForgotPassScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
      
          <Image
              source={require("../assets/images/LoginScreen/login_logo.jpg")}
              style={{
                  height: 200,
                  width: 200,
                  marginRight: 8,
                  borderRadius: 10
              }}
              resizeMode='contain'
          />
          <Text
            style={styles.txtLogiTitle}>
            Quên mật khẩu
          </Text>

        </View>

       

        <InputField
          label={'Nhập Email để xác nhận mã'}
          style={styles.inputField1}
          icon={
            <Ionicons
              name="mail"
              size={20}
              color="#666"
              style={{ marginRight: 5, fontSize: 40 }}
            />
          }
          keyboardType="email-address"
        />


        <CustomButton label={"Xác thực"} onPress={() => { navigation.navigate('')}} />
        {/* <CustomButton label={"Đăng nhập"} onPress={() => { navigation.navigate('StudentList')}} />
        <CustomButton label={"Đăng nhập"} onPress={() => { navigation.navigate('CourseList')}} /> */}
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 200,
            fontSize: 30,
          }}>
          <Text style={{fontSize: 20}}>Quay lại</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#00cccc', fontWeight: '700', fontSize: 20, }}> Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtLogiTitle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10, marginTop: 10 
  },


});



export default ForgotPassScreen;
