const { MongoClient } = require("mongodb")

// Replace the uri string with your connection string
const uri = "mongodb+srv://udemyDb:Author1ze@cluster0.hgfkznf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(uri)

async function run() {
  try {
    const database = client.db("TestDB")
    const movies = database.collection("TestCollection")

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: "Back to the Future" }
    const movie = await movies.findOne(query)

    console.log(movie)
  } finally {
    await client.close()
  }
}
run().catch(console.dir)
