/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    init();
    return () => {};
  }, []);

  async function init() {
    //await TrackPlayer.setupPlayer();

    await TrackPlayer.add([
      {
        url: 'http://75.119.137.255/Botswana/Vee%20Mampeezy/U%20Kondelela.mp3', // Load media from the network
        title: 'U Kondelela',
        artist: 'Vee Mampeezy',
        album: 'U Kondelela',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00', // RFC 3339
        artwork: 'http://75.119.137.255/Botswana/Vee%20Mampeezy/artist.jpg', // Load artwork from the network
        duration: 402,
      },
    ]);

    //TrackPlayer.play();
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
