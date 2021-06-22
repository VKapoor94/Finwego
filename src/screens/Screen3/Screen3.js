import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';
import ClassComponent from '../../components/ClassComponent';
import RadioButton from 'react-native-radio-button';
import ClassData from '../../data/ClassData';
import styles from './Screen3.style';
import COLOR from '../../theme/Color';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const Screen3 = () => {
  const navigation = useNavigation();
  const [checkedState, setChecked] = React.useState(ClassData);
  const CheckedChange = (item, i) => {
    let items = checkedState;
    items[i].checked = items[i].checked ? !items[i].checked : true;
    setChecked(items);
  };

  const renderItem = ({item, index}) => (
    <ClassComponent
      item={item}
      index={index}
      checkedState={checkedState}
      CheckedChange={CheckedChange}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ClassData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        extraData={ClassData}
      />
      <View style={styles.button}>
        <Button
          title="Proceed"
          onPress={() => navigation.navigate('Screen3')}
          color={COLOR.ORANGE}
        />
      </View>
    </View>
  );
};

export default Screen3;
