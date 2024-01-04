import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window')

export default function OnboardingScreen () {
  
  const navigation = useNavigation();
  const handleDone  = () => {
    navigation.navigate('Home')
    setItem('onboarded', '1')
  }
  const doneButton = ({...props}) => {
    return (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text>Done</Text>
        </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        bottomBarHighlight={false}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
            {
                backgroundColor: '#a7f3d0',
                image: (
                    <View style={styles.lottie}>
                        <LottieView source={require('../assets/animations/welcome.json')} autoPlay loop />
                    </View>
                ),
                title: 'Boost Productivity',
                subtitle: 'Try to program everyday & boost productivity',
            },
            {
                backgroundColor: '#fef3c7',
                image: (
                    <View style={styles.lottie}>
                        <LottieView source={require('../assets/animations/work.json')} autoPlay loop />
                    </View>
                ),
                title: 'Work Seamlessly',
                subtitle: 'Get your work done seamlessly without interuption',
            },
            {
                backgroundColor: '#a78bfa',
                image: (
                    <View style={styles.lottie}>
                        <LottieView source={require('../assets/animations/achieve.json')} autoPlay loop />
                    </View>
                ),
                title: 'Achieve Higher Goals',
                subtitle: 'Learning is the key to achieve higher goals. Keep learning',
            },
        ]}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'White',
    },
    lottie: {
        width: width*0.9,
        height: width,
    },
    doneButton: {
        padding: 20,
        backgroundColor: "white",
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: "100%"
    }
})