import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import en from '../locales/en';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../theme/Color';
import SelectMultiple from 'react-native-select-multiple';
import ClassData from '../../src/data/ClassData';
import CheckBox from '@react-native-community/checkbox';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const ClassComponent = ({item, index, checkedState, CheckedChange}) => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10, marginTop: 7}}>
        <CheckBox
          value={item.checked}
          onValueChange={() => CheckedChange(item, index)}
          tintColors={{true: COLOR.ORANGE}}
        />
      </View>
      <Text style={styles.year}>{item.Class}</Text>
      <View style={styles.innerContainer}>
        <Menu>
          <MenuTrigger>
            <Entypo name="dots-three-vertical" size={16} color={COLOR.BLACK} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Edit" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{color: 'red'}}>Delete</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
    height: 50,
    marginHorizontal: 12,
    marginBottom: 10,
    marginTop: 5,
  },
  year: {
    fontSize: 20,
    color: COLOR.BLACK,
    margin: 10,
  },
  innerContainer: {
    flex: 1,
    position: 'absolute',
    right: 0,
    marginRight: 15,
    marginTop: 15,
  },
});

export default ClassComponent;
