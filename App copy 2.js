import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [player3, setPlayer3] = useState('');
  const [player4, setPlayer4] = useState('');
  const [scores, setScores] = useState([]);

  const handleSubmit = () => {
    if (player1 && player2 && player3 && player4) {
      setScores([
        ...scores,
        { player1, player2, player3, player4 }
      ]);
      setPlayer1('');
      setPlayer2('');
      setPlayer3('');
      setPlayer4('');
    } else {
      alert('Please enter all scores.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Mahjong Score Input</Text>
      <TextInput
        placeholder="Player 1 Score"
        value={player1}
        onChangeText={setPlayer1}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Player 2 Score"
        value={player2}
        onChangeText={setPlayer2}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Player 3 Score"
        value={player3}
        onChangeText={setPlayer3}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />
      <TextInput
        placeholder="Player 4 Score"
        value={player4}
        onChangeText={setPlayer4}
        keyboardType="numeric"
        style={{ marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />
      <Button title="Submit Scores" onPress={handleSubmit} />
      <FlatList
        data={scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}>
            <Text>Player 1: {item.player1}</Text>
            <Text>Player 2: {item.player2}</Text>
            <Text>Player 3: {item.player3}</Text>
            <Text>Player 4: {item.player4}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
