import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ visible, addGoal, onCancel }) {
  const [text, setText] = useState("");

  const onPressCancel = () => {
    setText("");
    onCancel();
  };

  const handlePressAdd = () => {
    if (!text) return;

    addGoal(text);
    onPressCancel();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          value={text}
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={setText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onPressCancel} color="#f31282" />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add goal" onPress={handlePressAdd} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    backgroundColor: "#5e0acc",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    marginRight: 8,
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
  buttonContainer: {
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 32,
  },
});
