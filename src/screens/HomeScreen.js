import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';

const HomeScreen = (props) => {
  return  (
      <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View >
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Form') } >
              <Text style={styles.text}>Form</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Order') } >
              <Text style={styles.text}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Help') } >
              <Text style={styles.text}>Help Center</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
        backgroundColor: 'black',
        height: 55,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        marginHorizontal: 40,
        borderColor: '#808080',
        borderWidth: 1,

  },
  text:{
      color: "white",
      fontSize: 15,
      fontWeight: "bold"
  }
});

export default HomeScreen;