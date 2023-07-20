import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('HomeScreen');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkipe={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('./../../../assets/animations/refresh.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
          },
          {
            backgroundColor: '#EEEDED',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('./../../../assets/animations/persons.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
          },
          {
            backgroundColor: '#DFA878',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('./../../../assets/animations/hi.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    height: 60,
    width: 100,
    backgroundColor: '#D4E2D4',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
