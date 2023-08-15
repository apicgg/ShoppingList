import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
// import {uuid} from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Milk',
    },
    {
      id: 2,
      text: 'Eggs',
    },
    {
      id: 3,
      text: 'Bread',
    },
    {
      id: 4,
      text: 'Butter',
    },
  ]);

  const deleteItem = (id: number) => {
    setItems(prevState => {
      return prevState.filter(item => item.id !== id);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List" />
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
