import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, id, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(id)}
        // android_ripple={{ color: "#210644", borderRadius: 6 }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  pressedItem: {
    backgroundColor: "#210644",
  },
  goalItemText: {
    padding: 8,
    color: "#fff",
  },
});
