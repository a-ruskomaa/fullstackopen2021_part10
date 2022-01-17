import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  // ...
});

const AppBarTab = ({ label }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={{ color: '#EEE' }} fontWeight={'bold'} fontSize={'subheading'}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;