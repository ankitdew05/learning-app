import { SafeAreaView, StyleSheet ,Image, View, Text} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
     <View>
        <Text style = {styles.headline}>LSM</Text>
        <Text style= {styles.des}>Learning Management System</Text>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headline : {
    fontSize : 38,
    fontWeight : "bold",
    color : "grey300"
  },
    header:{
        width: "100%",
        flexDirection: 'row',
        padding: 20, 
    },
    des : {
      fontSize : 16,
    color : "grey500"
    }
})

export default Header;