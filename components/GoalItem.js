// GoalItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View
        style={{
          backgroundColor: '#3498db',
          borderRadius: 10,
          color: 'white',
          height: 50,
          padding: 10,
          margin: 5,
          justifyContent: 'center',
        }}
      >
        <Text style={[{ color: 'white', fontWeight: '600' }, props.textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
