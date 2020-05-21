
import React from 'react';
import {
  
  StyleSheet,
  View,
  Text,
  FlatList
  
 } from 'react-native';

const List = ()=>{
     const friends=[
         {name:"Samir"},
         {name:"Sujan"},
         {name:"Arjun"},
         {name:"Sumit"}
     ]

  return(


    <FlatList 
    data={friends}
    renderItem={ ({item})=>{
   return <Text>{item.name}</Text>
    }

    } />
    

       

  )
}


const styles = StyleSheet.create({

})


export default List;
