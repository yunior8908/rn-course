import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handlePressAdd = (text) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        text,
        key: Math.random().toString(),
        id: Math.random().toString(),
      },
    ]);
  };

  const handlePressDelete = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={handleOpenModal}
        />
        <GoalInput
          visible={modalVisible}
          addGoal={handlePressAdd}
          onCancel={onCancel}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem
                id={item.id}
                text={item.text}
                onDelete={handlePressDelete}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
