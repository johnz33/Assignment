import React from 'react'
import { StyleSheet, View,Text, Pressable } from 'react-native'
import { Colors } from '../constants/colors'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View style={styles.headermain}>
       <View style={styles.header}>
       <MaterialIcons
          name="assignment"
          size={40}
          style={{ paddingLeft:10 }}
          color="white"
        />
        <Text style={styles.title}>
          Assign<Text style={styles.titlesub}>ment...</Text>
        </Text>
       </View>
       <View>
       <Pressable>
       <Ionicons name="filter-outline" size={30} style={{paddingRight:10}} color="white" />
       </Pressable>
       </View>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headermain:{
          backgroundColor:Colors.primary,
          height:60,
          display:"flex",
          flexDirection:'row',
          alignItems:'center',
          justifyContent:"space-between"
    },
    header:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center'
    },
    title: {
        color: "white",
        textAlign: "center",
        paddingLeft:10,
        fontSize: 30
      },
      titlesub: {
        color: "black",
      }
})