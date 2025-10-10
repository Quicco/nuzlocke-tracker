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
  gyms: {
    type: [{ name: String, levelCap: Number }],
    required: true,
  },
  eliteFour: {
    type: [{ name: String, levelCap: Number }],
    required: true,
  },
  champion: { type: Object, required: true },
  kantoGyms: {
    type: [{ name: String, levelCap: Number }]
  },
  finalBoss: {
    type: Object
  }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
