import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Prop = {
  addItem: (text: string) => void;
};

const AddItem = ({addItem}: Prop) => {
  const [text, setText] = useState<string>('');

  const handleAddItem = (textValue: string) => {
    addItem(textValue);
    setText('');
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Add item..."
        style={styles.input}
      />
      <TouchableOpacity onPress={() => handleAddItem(text)} style={styles.btn}>
        <Text style={styles.btnText}>
          <FontAwesome name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
