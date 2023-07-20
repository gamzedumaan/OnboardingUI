import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {removeItem} from '../../../util/asyncStorage';
import {useNavigation} from '@react-navigation/native';

const {width, heigt} = Dimensions.get('window');
export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async () => {
    await removeItem('onboarded');
    navigation.push('OnboardingScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lottie}>
        <Lottie
          source={require('./../../../assets/animations/party.json')}
          autoPlay
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Home Screen</Text>
        <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDED',
  },
  lottie: {
    width: width * 0.9,
    height: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  resetButton: {
    height: 50,
    width: 70,
    backgroundColor: '#DBC4F0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  resetText: {
    fontSize: 20,
    color: '#F31559',
  },
});
