import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react"

import styles from "./App.module.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/header/Header"
import HomePage from "./components/main_body/homePage/HomePage"
import Recipe1 from "./components/main_body/recipe/Recipe1"
import Recipe2 from "./components/main_body/recipe/Recipe2"
import Recipe3 from "./components/main_body/recipe/Recipe3"
import Recipe4 from "./components/main_body/recipe/Recipe4"

import RecipeTemplate from "./components/main_body/recipe/RecipeTemplat"
import AddRecipe from "./components/main_body/addRecipe/AddRecipe"

// import template
import Template from "./components/main_body/template"

function App() {
  const [users, setUsers] = useState([])
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((e) => console.log(e))
  }, [])

  return (
    <BrowserRouter>
      <Header recipes={recipes} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {recipes.map((recipe) => (
          <Route path={recipe._id} element={<RecipeTemplate recipe={recipe} />} />
        ))}
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe2" element={<Recipe2 />} />
        <Route path="/recipe3" element={<Recipe3 />} />
        <Route path="/recipe4" element={<Recipe4 />} />
        <Route path="/add_recipe" element={<AddRecipe />} />
        {/* template link */}
        <Route path="/template" element={<Template />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
