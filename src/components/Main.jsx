import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar/AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Text>Rate Repository Application</Text>
      <RepositoryList></RepositoryList>
    </View>
  );
};

export default Main;