import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  gen: {
    type: Number,
    required: true,
  },
  gyms: [{ name: String, levelCap: Number }],
  eliteFour: [{ name: String, levelCap: Number }],
  champion: [{ name: String, levelCap: Number }],
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
