import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Task  */}

      <View style={styles.taskWrapper}>

        <Text style={styles.sectionTitle}> Today's Task   </Text>

        <View style={styles.items}>
          {/* This is the to do list*/}

          <Task text={'This is a dummy task as Task 1'} />
          <Task text={' task as Task 2'} />
          <Task text={'This is a dummy task as Task 3'} />
          <Task text={'This is a dummy task as Task 4'} />
          <Task text={'This is a dummy task as Task 5'} />
          < Task text={'This is a dummy task as Task 5'} />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {

  }
});
