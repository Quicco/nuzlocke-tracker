import Game from '../models/Game.js';

export async function getAllGames(req, res) {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    console.error("Can't find any games", error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function getGameById(req, res) {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({message: "Game not found"});
    }
    res.status(200).json(game);
  } catch (error) {
    console.error("Can't find any games", error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function createGame(req, res) {
  try {
    const { title, gen, gyms, eliteFour, champion, kantoGyms, finalBoss } = req.body;
    const newGame = new Game({ title, gen, gyms, eliteFour, champion, kantoGyms, finalBoss });

    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    console.error('Error in createGame controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function updateGame(req, res) {
  try {
    const { title, gen, gyms, eliteFour, champion, kantoGyms, finalBoss } = req.body;

    /*  it deconstructs the data from the body into an object
    if any property is undefined, then mongoose ignores it
    in other words, only updates whatever we provide it */
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, {
      title,
      gen,
      gyms,
      eliteFour,
      champion,
      kantoGyms,
      finalBoss
    }, {
      new: true
    });

    if (!updatedGame) {
      return res.status(404).json({message: "Game not found"});
    }

    res.status(200).json(updatedGame);
  } catch (error) {
    console.error('Error in createGame controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export async function deleteGame(req, res) {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
      return res.status(404).json({message: "Game not found"});
    }

    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    console.error('Error in deleteGame controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
