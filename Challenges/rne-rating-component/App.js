import React, { useState } from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card, Rating, SpeedDial } from 'react-native-elements';

export default function App() {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [submittedMsg, setSubmittedMsg] = useState('Submitted Rating: ' + rating);

  return (
    <View style={styles.container}>
      <Card>
        <Text>Overall Rating</Text>
        <Rating
          startingValue={3}
          imageSize={20}
          style={{ alignItems: 'center', padding: 10 }}
          readonly={true}
          type='rocket'
          fractions={1}
          ratingCount={10}
        />
        <Text>Submit Your Rating</Text>
        <Rating
          imageSize={20}
          startingValue={rating}
          style={{ alignItems: 'center' }}
          onFinishRating={newRating => setRating(newRating)}
          type='rocket'
          fractions={1}
          ratingCount={10}
          showRating={true}
        />
        <View style={{ margin: 20 }}>
          <Button
            color='#5637DD'
            title='Submit'
            onPress={() => setSubmittedMsg('Submitted Rating: ' + rating)}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>
            {submittedMsg}
          </Text>
        </View>
      </Card>
      <SpeedDial
        isOpen={open}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
