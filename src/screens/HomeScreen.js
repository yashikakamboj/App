import React from "react";
import { Text, StyleSheet, View, Modal, TouchableOpacity} from "react-native";
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
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Time') } >
              <Text style={styles.text}>Break time</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Delivery') } >
              <Text style={styles.text}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Driver') } >
              <Text style={styles.text}>Driver Medicine Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Client') } >
              <Text style={styles.text}>Client Medicine Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=>{props.navigation.navigate('Popup')}} >
              <Text style={styles.text}>Pop Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Delivery2') } >
              <Text style={styles.text}>Delivery reference</Text>
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