import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window')

export default function OnboardingScreen () {
  return (
    <View style={styles.container}>
      <Onboarding
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
    }
})