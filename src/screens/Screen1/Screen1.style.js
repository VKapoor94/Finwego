import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import COLOR from '../../theme/Color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: COLOR.ORANGE,
    borderColor: COLOR.WHITE,
    borderWidth: 2,
  },
});

export default styles;
