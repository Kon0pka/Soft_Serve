const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const MONGO_URI = "mongodb+srv://udemyDb:Author1ze@cluster0.hgfkznf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(MONGO_URI)

let messagesCollection
let recipeCollection

async function startServer() {
  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("UdemyDB") // nazwa bazy danych
    messagesCollection = db.collection("usersData") // nazwa kolekcji
    recipeCollection = db.collection("recipesData")

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error("MongoDB connection failed:", err)
  }
}

startServer()

// zbiera dane użytkownikuw
app.get("/api/users", async (req, res) => {
  try {
    const data = await messagesCollection.find().toArray()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

//zbiera wszystkie przepisy
app.get("/api/recipes", async (req, res) => {
  try {
    const data = await recipeCollection.find().toArray()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
