import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Colors } from "../constants/colors";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBD3lxiCA-oxYyrcSWJEmMgO9zTlGsNZI4",
  authDomain: "ecom-f1503.firebaseapp.com",
  databaseURL: "https://ecom-f1503-default-rtdb.firebaseio.com",
  projectId: "ecom-f1503",
  storageBucket: "ecom-f1503.firebasestorage.app",
  messagingSenderId: "893064240316",
  appId: "1:893064240316:web:2e0fecefe0baec1eab44b9",
  measurementId: "G-NC6P6M2Y67"
};

const app=initializeApp(firebaseConfig);

export {app};

interface AuthScreenProps{
  email:string;
  setEmail:Dispatch<SetStateAction<string>>;
  password:string;
  setPassword:Dispatch<SetStateAction<string>>;
  isLogin:any;
  setIsLogin:any;
  handleAuthentication:any;
}

const AuthScreen = ({email,setEmail,password,setPassword,isLogin,setIsLogin,handleAuthentication}:AuthScreenProps) => {

  const navigation=useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.authmain}>
        <Text style={styles.title}>
          Assign<Text style={styles.titlesub}>ment...</Text>
        </Text>
        <Text style={styles.login}>{isLogin?"Log In":"Sign Up"}</Text>
        <TextInput
          value={email}
          placeholder="please enter email ..."
          style={styles.email}
          onChangeText={setEmail}
        />
        <TextInput
          value={password}
          placeholder="please enter password"
          style={styles.password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={handleAuthentication}>
          <Text style={{ color: "white" }}>Log In </Text>
        </Pressable>
        <View>
          <Text onPress={()=>navigation.navigate("SignUp")} style={{paddingTop:10}}>
            create an Account? <Text style={{color:Colors?.primary}}>Sign Up</Text>
          </Text>
        </View>
        <MaterialIcons
          name="assignment"
          size={90}
          style={{ marginTop: 120 }}
          color={Colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};

const LoginScreen = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [user,setUser]=useState(null)  //track user authentication state
  const [isLogin,setIsLogin]=useState(true)
  const navigation=useNavigation();
  const auth=getAuth(app);

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user:any)=>{
      setUser(user)
    })

    return ()=>unsubscribe();
  },[auth]);

  const handleAuthentication = async()=>{
    try{
      // if(user){
      //   //if user is already authenticated ,log out
      //   console.log("user logged out successfully")
      //   await signOut(auth);
      // }
      // else{
        if(isLogin){
          //Sign In
          await signInWithEmailAndPassword(auth,email,password);
          console.log("user signed in successfully");
          navigation.navigate("Home")
        // } else{
        //   //sign up
        //   await createUserWithEmailAndPassword(auth,email,password);
        //   console.log("user created successfully");
        // }
      }
    } catch(error:any){
      console.log("Authentication Error",error.message)
    }
  }
  return (
    <ScrollView>
      <AuthScreen 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      handleAuthentication={handleAuthentication}/>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  authmain: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: Colors?.primary,
    textAlign: "center",
    fontSize: 40,
    marginTop: 80,
  },
  titlesub: {
    color: "black",
  },
  login: {
    fontSize: 20,
    marginTop: 60,
  },
  email: {
    width: 200,
    borderWidth: 1.5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 5,
    borderColor: Colors?.primary,
  },
  password: {
    width: 200,
    borderWidth: 1.5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 5,
    borderColor: Colors?.primary,
  },
  button: {
    backgroundColor: Colors?.primary,
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
  },
});
