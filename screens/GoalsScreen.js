// GoalScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../components/AppContext';

const GoalScreen = () => {
  const navigation = useNavigation();
  const { appSettings } = useAppContext();

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddModal(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  const clearAllGoalsHandler = () => {
    setCourseGoals([]);
  };

  const containerStyle = {
    flex: 1,
    paddingTop: 20,
    backgroundColor: appSettings.theme === 'dark' ? '#d579ff' : 'white',
  };

  const textStyle = {
    fontSize: getFontSize(appSettings.fontSize),
  };

  return (
    <View style={containerStyle}>
      <View style={styles.content}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
              title={itemData.item.value}
              textStyle={textStyle} // Pass the textStyle to GoalItem
            />
          )}
        />

        <View style={styles.buttonsContainer}>
          <Button title="Add New Goal" onPress={() => setIsAddModal(true)} />
          <Button title="Clear All Goals" onPress={clearAllGoalsHandler} />
        </View>
      </View>
      <GoalInput visible={isAddModal} onAddGoal={addGoalHandler} onCancel={() => setIsAddModal(false)} />
    </View>
  );
};

const getFontSize = (fontSize) => {
  switch (fontSize) {
    case 'small':
      return 14;
    case 'normal':
      return 18;
    case 'big':
      return 22;
    default:
      return 18;
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  buttonsContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GoalScreen;
