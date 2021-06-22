import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import en from '../locales/en';
import Entypo from 'react-native-vector-icons/Entypo';
import COLOR from '../theme/Color';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import RadioButton from 'react-native-radio-button';

const AcademicComponent = ({
  item,
  index,
  onPress,
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 10, marginTop: 13}}>
        <RadioButton
          innerColor={COLOR.ORANGE}
          outerColor={COLOR.ORANGE}
          isSelected={selectedIndex == index}
          size={13}
          onPress={() => {
            onPress(index);
          }}
        />
      </View>
      <Text style={styles.year}>{item.Year}</Text>
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

export default AcademicComponent;
