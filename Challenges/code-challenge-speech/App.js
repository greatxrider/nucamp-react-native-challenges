import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Speech from 'expo-speech';

export default function App() {
  const [thingToSay, setThingToSay] = useState('Hello Nucamp');
  const [voices, setVoices] = useState([]);
  const [filteredVoices, setFilteredVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    (async () => {
      const availableVoices = await Speech.getAvailableVoicesAsync();
      setVoices(availableVoices);
      const defaultVoice = availableVoices[0];
      setSelectedVoice(defaultVoice?.identifier);
      filterVoicesByLanguage('en');  // Default language filter
    })();
  }, []);

  const filterVoicesByLanguage = (lang) => {
    const voicesByLanguage = voices.filter((voice) => voice.language.startsWith(lang));
    setFilteredVoices(voicesByLanguage);
    if (voicesByLanguage.length > 0) {
      setSelectedVoice(voicesByLanguage[0].identifier);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    filterVoicesByLanguage(lang);
  };

  const speak = () => {
    const options = {
      voice: selectedVoice,
      pitch: 0,
      rate: 1,
      language: language,
    };
    Speech.speak(thingToSay, options);
  };

  const reverseSpeak = () => {
    const reversedText = thingToSay.split('').reverse().join('');
    const options = {
      voice: selectedVoice,
      pitch: 0,
      rate: 1,
      language: language,
    };
    Speech.speak(reversedText, options);
  };

  const stopSpeech = () => {
    Speech.stop();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setThingToSay}
        defaultValue='Hello Nucamp'
      />
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue) => handleLanguageChange(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="Italian" value="it" />
        <Picker.Item label="Portuguese" value="pt" />
        <Picker.Item label="Russian" value="ru" />
        <Picker.Item label="Chinese (Simplified)" value="zh-CN" />
        <Picker.Item label="Chinese (Traditional)" value="zh-TW" />
        <Picker.Item label="Japanese" value="ja" />
        <Picker.Item label="Korean" value="ko" />
        <Picker.Item label="Arabic" value="ar" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Bengali" value="bn" />
        <Picker.Item label="Punjabi" value="pa" />
        <Picker.Item label="Gujarati" value="gu" />
        <Picker.Item label="Tamil" value="ta" />
        <Picker.Item label="Telugu" value="te" />
        <Picker.Item label="Marathi" value="mr" />
        <Picker.Item label="Urdu" value="ur" />
        <Picker.Item label="Persian" value="fa" />
        <Picker.Item label="Turkish" value="tr" />
        <Picker.Item label="Vietnamese" value="vi" />
        <Picker.Item label="Thai" value="th" />
        <Picker.Item label="Dutch" value="nl" />
        <Picker.Item label="Greek" value="el" />
        <Picker.Item label="Hebrew" value="he" />
        <Picker.Item label="Polish" value="pl" />
        <Picker.Item label="Czech" value="cs" />
        <Picker.Item label="Swedish" value="sv" />
        <Picker.Item label="Danish" value="da" />
        <Picker.Item label="Norwegian" value="no" />
        <Picker.Item label="Finnish" value="fi" />
        <Picker.Item label="Hungarian" value="hu" />
        <Picker.Item label="Romanian" value="ro" />
        <Picker.Item label="Indonesian" value="id" />
        <Picker.Item label="Malay" value="ms" />
      </Picker>
      <Picker
        selectedValue={selectedVoice}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedVoice(itemValue)}
      >
        {filteredVoices.map((voice) => (
          <Picker.Item label={`${voice.name} (${voice.language})`} value={voice.identifier} key={voice.identifier} />
        ))}
      </Picker>
      <View style={styles.buttonContainer}>
        <Button title="SPEAK" onPress={speak} />
        <View style={styles.buttonSpacing} />
        <Button title="STOP" onPress={stopSpeech} />
        <View style={styles.buttonSpacing} />
        <Button title="REVERSE SPEAK" onPress={reverseSpeak} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    margin: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacing: {
    width: 20, // Adjust the width to control the space between buttons
  },
});
