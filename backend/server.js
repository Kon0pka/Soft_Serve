const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

const uri = 'mongodb+srv://udemyDb:Author1ze@cluster0.hgfkznf.mongodb.net/UdemyDB?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());

const recipeSchema = new mongoose.Schema({
  nazwa: String,
  poziom: String,
  czas: Number,
  składniki: [String],
  przepis: String,
  img: String,
  ocena: Number,
  ilosc: Number,
  kategoria: String
});

const Recipe = mongoose.model('Recipe', recipeSchema, 'recipesData');

app.post('/api/recipes', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json({ message: 'Recipe saved!', recipe });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});