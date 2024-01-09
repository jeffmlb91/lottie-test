import React, { useState, useEffect, useRef} from 'react';
import { ImageBackground, Text, TouchableOpacity, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';

// Replace with the path to your local image or a remote URL
const backgroundImage = require('../assets/images/cropped04.avif');

const images  = [
  require('../assets/images/cropped04.avif'),
  require('../assets/images/home3.avif'),
  require('../assets/images/homme1.png'),
  require('../assets/images/portrait-free-photo.jpeg')
]

export default function WelcomeScreen() {

  const [currentImage, setCurrentImage] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current //Initial fade animation value

  // Change image every 5 seconds 
  useEffect(() => {
    const interval = setInterval(() => {
      fadeAnim.setValue(0); // Reset the fade animation
      setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
    }, 9000);

    //Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(interval);
  },[currentImage, fadeAnim]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/**Animated background image with fade transition */}
      <Animated.View style={{...tw`flex-1 justify-end`, opacity: fadeAnim}}>
      <ImageBackground source={images[currentImage]} style={tw`flex-1 justify-end`}>

        {/* Gradient Overlay */}
        <LinearGradient
          colors={['rgba(135, 125, 250, 0.8)', 'transparent']}
          style={tw`absolute inset-0`}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.5 }}
        />
  
         {/* Faded Purple Overlay */}
        {/* <View style={tw`absolute inset-0 bg-purple-200 opacity-40`} /> */}
        {/* Overlay Container */}
        <View style={tw`p-5 items-center`}>
          <Text style={tw`text-white text-2xl font-bold text-center mb-3`}>
            Welcome to Yekola Lingala
          </Text>
          <Text style={tw`text-white text-center mb-6`}>
            Sign-in or Sign-Up to connect with passionate native speakers for an immersive language-learning experience.
          </Text>

          {/* Buttons */}
          <TouchableOpacity
            style={tw`bg-purple-400 w-full py-3 rounded-lg items-center mb-3`}
            onPress={() => console.log('Sign In pressed')}
          >
            <Text style={tw`text-white text-lg font-bold`}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border-2 border-white w-full py-3 rounded-lg items-center`}
            onPress={() => console.log('Get Started pressed')}
          >
            <Text style={tw`text-white text-lg font-bold`}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
}
// // Dummy data for image URLs
// const images = [
//   '/assets/images/istockphoto-1162090615-612x612.jpg', // Replace with your actual image paths
//   '/assets/images/istockphoto-1162090615-612x612.jpg',
//   // Add as many images as you like
// ];

// export default function WelcomeScreen() {
  
//   return(
//     <SafeAreaView style={tw`flex-1`}>
  
//        <View style={tw`items-center`}>
//           <Text style={tw`text-black text-2xl font-bold p-4`}>Welcome to Yekola Lingala</Text>
//           <Text style={tw`text-black text-center`}>
//             Sign-in or Sign-Up to connect with passionate native speakers for an immersive language-learning experience.
//           </Text>
//           <TouchableOpacity style={tw`bg-purple-600 rounded-full px-6 py-2 m-2`}>
//             <Text style={tw`text-white font-bold`}>Sign In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={tw`bg-purple-600 rounded-full px-6 py-2 m-2`}>
//             <Text style={tw`text-white font-bold`}>Get Started</Text>
//           </TouchableOpacity>
//         </View>
//     </SafeAreaView>
//   )    
// }

// // If you want to further customize styles that twrnc doesn't support, you can use StyleSheet
// const styles = StyleSheet.create({
//   // ... any custom styles go here
// });

























// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { themeColors } from '../theme'
// import tw from 'twrnc';




// export default function WelcomeScreen () {
//     return(
//         <SafeAreaView style={tw `flex-1 justify-center items-center bg-indigo-400`}>
//             <View >
//               <Text style={tw `text-white font-bold text-4xl`}>Let's get started!</Text>
//             </View>
//         </SafeAreaView>
//     )    
// }





// export default function WelcomeScreen () {
//     return(
//         <SafeAreaView style={styles.SafeArea}>
//             <View style={styles.container} >
//               <Text style={styles.text}>Let's get started!</Text>
//             </View>
//         </SafeAreaView>
//     )    
// }

// const styles = StyleSheet.create({
//     SafeArea: {
//         flex: 1,
//         backgroundColor: themeColors.bg
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'    
//     },
//     text: {
//       color: "white"
      
//     }
// })
