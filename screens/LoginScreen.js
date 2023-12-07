import React, { useState } from 'react';
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

const usersData = [
  {
    email: "admin@gmail.com",
    password: "123"
  }
  // Add more users as needed
]


const LoginScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Nhập email và mật khẩu để đăng nhập');
      return;
    }
    const user = usersData.find((user) => user.email === email);
  
    if (user && user.password === password) {
      //setLoggedIn(true);
      
      navigation.navigate('Trang chủ');
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };
  

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
            Đăng nhập
          </Text>

        </View>

        <View style={styles.InputField}>
        <Ionicons
              name="mail"
              size={20}
              color="#666"
              style={{ marginRight: 5, fontSize: 40 }}
            />
        <TextInput
          
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        </View>

        <View style={styles.InputField}>
        <Ionicons
              name="ios-lock-closed"
              size={20}
              color="#666"
              style={{ marginRight: 5, fontSize: 40 }}
            />
        <TextInput
          
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        </View>     

        <CustomButton label={"Đăng nhập"} onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
          <View>
              <Text
            style={{
                flexDirection: 'row',
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: 50,
                fontSize: 20
              }}>Quên mật khẩu</Text>
          </View>
        </TouchableOpacity>
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 100,
            fontSize: 30,
          }}>
          <Text style={{fontSize: 20}}>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#00cccc', fontWeight: '700', fontSize: 20, }}> Đăng ký ngay</Text>
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

  InputField: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: '#ddd',
  }

});



export default LoginScreen;
