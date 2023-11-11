import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';

const numberOfGames = 4;
const numberOfPlayers = 4;

const MahjongScoreCard = () => {
  const [players, setPlayers] = useState(new Array(numberOfPlayers).fill(''));
  const [scores, setScores] = useState(
    new Array(numberOfGames).fill(null).map(() => new Array(numberOfPlayers).fill(''))
  );

  const handlePlayerNameChange = (text, index) => {
    const newPlayers = [...players];
    newPlayers[index] = text;
    setPlayers(newPlayers);
  };

  const handleScoreChange = (text, gameIndex, playerIndex) => {
    const newScores = [...scores];
    newScores[gameIndex][playerIndex] = text;
    setScores(newScores);
  };

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const cellWidth = screenWidth / (numberOfPlayers + 1); // +1 は左のセル分
    const cellHeight = 40; // プレイヤーのセルの高さ

    setStyles({
      leftCellStyles: {
        width: cellWidth * 0.2, // 一番左のセルの幅を変更
        height: cellHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
      },
      playerCellStyles: {
        width: cellWidth * 0.8, // プレイヤーのセルの幅を変更
        height: cellHeight,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
      },
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.leftCellStyles} />
        {players.map((_, index) => (
          <View key={`player-${index}`} style={styles.playerCellStyles}>
            <TextInput
              style={styles.cellInput}
              value={players[index]}
              onChangeText={(text) => handlePlayerNameChange(text, index)}
              placeholder={`プレイヤー ${index + 1}`}
            />
          </View>
        ))}
      </View>
      {scores.map((gameScores, gameIndex) => (
        <View key={`game-${gameIndex}`} style={styles.row}>
          <View style={styles.leftCellStyles}>
            <Text style={styles.gameNumber}>{gameIndex + 1}</Text>
          </View>
          {gameScores.map((score, playerIndex) => (
            <View key={`score-${gameIndex}-${playerIndex}`} style={styles.playerCellStyles}>
              <TextInput
                style={styles.cellInput}
                value={score}
                onChangeText={(text) => handleScoreChange(text, gameIndex, playerIndex)}
                keyboardType="numeric"
                placeholder="0"
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const [styles, setStyles] = useState({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cellInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    textAlign: 'center',
  },
  gameNumber: {
    fontSize: 16,
  },
});

export default MahjongScoreCard;
