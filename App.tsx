import React, {useState} from 'react';
import {Alert, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

type Item = {
  id: string | number[];
  text: string;
}[];

const App = () => {
  const [items, setItems] = useState<Item>([]);

  const deleteItem = (id: string | number[]) => {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  const addItem = (text: string) => {
    if (!text) {
      Alert.alert('Error', 'Please enter adn item');
    } else {
      setItems(prevState => {
        return [...prevState, {id: uuid.v4(), text}];
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
