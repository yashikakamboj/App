{/*import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6081e175a7541617d41334a';

useEffect(() => {
    axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then((res) => res.json())
        .then((resJson)=>{setData(resJson)})
        .catch(console.error)
        
}, []);

const renderitems =(item)=>{
    return(
        <Text>{item.title}</Text>
    )
}

const API =()=>{

    const [data, setData] = useState([]);

    return(
        <View>
            <FlatList
                data={data}
                keyExtractor={item=>{ `key-${item.id}` }}
                renderItem={renderitems}
            />
        </View>
    )
}

const styles = StyleSheet.create({


});

export default API;
*/}