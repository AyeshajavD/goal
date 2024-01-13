import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

const GoalScreen = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
              title={itemData.item.value}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    alignItems: 'center',
  },
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
