import React from 'react';
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
const StudentComponent = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.Sname}>{item.Sname}</Text>
        <Text style={styles.Fees}>
          {en.RUPEES}
          {item.Fees}
          <Menu>
            <MenuTrigger>
              <Entypo
                name="dots-three-vertical"
                size={16}
                color={COLOR.BLACK}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text="Edit" />
              <MenuOption onSelect={() => alert(`Delete`)}>
                <Text style={{color: 'red'}}>Delete</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.class}>
          {item.AcademicYear} {'-'} {item.Class}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.WHITE,
    height: 75,
    marginHorizontal: 12,
    marginBottom: 10,
    borderRadius: 20,
  },
  Sname: {
    fontSize: 18,
    color: COLOR.BLACK,
    marginLeft: 10,
    marginTop: 10,
  },
  Fees: {
    fontSize: 18,
    color: COLOR.BLACK,
    marginTop: 20,
    marginRight: 10,
    position: 'absolute',
    right: 0,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  class: {
    fontSize: 18,
    color: COLOR.BLACK,
    marginLeft: 10,
  },
});

export default StudentComponent;
