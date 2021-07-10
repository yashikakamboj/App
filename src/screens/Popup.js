import React, { useState } from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Popup = ()=>{
    const [X, setX] = useState(false)
    return(
        <View>            
            <Button title="change" onPress={()=>{setX(true)}}></Button>
                <Modal transparent={true} visible={X}>
                    <View style={styles.popup}>
                        <Entypo name="circle-with-cross" size={35} backgroundColor="#000" onPress={()=>{setX(false)}} style={{marginLeft: 270, zIndex: 1, position:"absolute",}}></Entypo>
                            <View style={styles.container}>                        
                                <View style={styles.row}>
                                    <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                                    <Text style={styles.text}>Merchant Name</Text>
                                </View>
                                <View style={styles.star}>
                                    <Stars
                                        default={2.5}
                                        count={5}
                                        half={true}
                                        starSize={60}
                                        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                                        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                                        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                                    <Text style={styles.text}>Driver Name</Text>
                                </View>
                                <View style={styles.star}>
                                    <Stars
                                        default={2.5}
                                        count={5}
                                        half={true}
                                        starSize={60}
                                        fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                                        emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                                        halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btntext}>Submit</Text>
                            </TouchableOpacity>
                    </View>  
                </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    popup:{
        backgroundColor: '#3B3B3B',
        height: 330,
        width: 300,
        marginHorizontal: 55,
        marginVertical: 200,
        borderRadius: 20,
    },
    container:{
        paddingTop: 10,
        paddingHorizontal: 5
    },
    img: {
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1.5,
        height: 90,
        width: 90,
        marginLeft: 20
    },
    row:{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 0,
        
    },
    btn: {
        backgroundColor: 'black',
        height: 60,
        width: '60%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#808080',
        borderWidth: 1,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 60
  },
   btntext:{
      color: 'white',
      fontSize: 16
  },
  text:{
      color: 'white',
      fontSize: 17,
      paddingLeft: 20,
      paddingVertical: 20
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  star:{
      
  }
})
export default Popup;