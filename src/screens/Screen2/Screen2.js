import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';
import AcademicComponent from '../../components/AcademicComponent';
import RadioButton from 'react-native-radio-button';
import AcademicData from '../../data/AcademicData';
import styles from './Screen2.style';
import COLOR from '../../theme/Color';
import {useNavigation} from '@react-navigation/native';

const Screen2 = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onPress = index => {
    setSelectedIndex(index);
  };
  const renderItem = ({item, index}) => (
    <AcademicComponent
      onPress={onPress}
      item={item}
      index={index}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={AcademicData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={AcademicData}
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

export default Screen2;
