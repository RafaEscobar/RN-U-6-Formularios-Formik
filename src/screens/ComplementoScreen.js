import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const ComplementoScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Complemento: </Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
      flex: 1, 
      backgroundColor: 'aqua',
      padding: 10,
  },
  title: {
      fontSize:22,
      color: 'black',
      fontWeight: '500'
  }


});