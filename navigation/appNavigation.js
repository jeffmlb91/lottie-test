import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { getItem } from '../utils/asyncStorage';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    
    const [showOnboarding, setOnboarding] = useState(null);

    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, [])
    
    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if(onboarded==1) {
          //hide onboarding  
          setOnboarding(false)    
        }else {
         // Show onboarding
         setOnboarding(true)
        }
    }

    if(showOnboarding==null){
        return null
    }

    if(showOnboarding){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen}/>
                    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                    <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen}/>
                    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen}/>
                    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen}/>
                    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

}
