/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import images from './src/res/images';
import NumericInput from 'react-native-numeric-input';
import InputSpinner from "react-native-input-spinner";

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>
  //       <Header />
  //       <View
  //         style={{
  //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //         }}>
  //         <Section title="Step One">
  //           Edit <Text style={styles.highlight}>App.js</Text> to change this
  //           screen and then come back to see your edits.
  //         </Section>
  //         <Section title="See Your Changes">
  //           <ReloadInstructions />
  //         </Section>
  //         <Section title="Debug">
  //           <DebugInstructions />
  //         </Section>
  //         <Section title="Learn More">
  //           Read the docs to discover what to do next:
  //         </Section>
  //         <LearnMoreLinks />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
  return(
    <LinearGradient colors={['#BDC3C7', '#2C3E50']} style={{flex:1}}>
      <ScrollView  contentContainerStyle={{alignItems:'center'}}>
        <Image source={images.logo} style={{backgroundColor: 'transparent',alignSelf:'center'}} />
        <Text style={{fontFamily:'Raleway_Bold',alignSelf:'center',fontSize:30,color:'#000'}}>Whistle Counter</Text>
        <Text style={{fontFamily:'Raleway_Light',alignSelf:'center',fontSize:30,color:'#000',marginTop:20,marginBottom:20}}>Remind me after</Text>
        {/* <NumericInput style={{alignSelf:'center'}} onChange={value => console.log(value)} type='up-down' rounded upDownButtonsBackgroundColor='#66000000' borderColor='#000' /> */}
        <InputSpinner
          max={10}
          min={2}
          step={1}
          value={1}
          rounded={true}
          width={200}
          background='#BDC3C7'
          skin='clean'
          style={[{width: 250}]}
          onChange={(num) => {
            console.log(num);
          }}/>
          <Text style={{fontFamily:'Raleway_Light',alignSelf:'center',fontSize:30,color:'#000',marginTop:20,marginBottom:20}}>Whistles</Text>
      </ScrollView>  
    </LinearGradient>      

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
