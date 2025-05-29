import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styles from "./App.module.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/header/Header"
import HomePage from "./components/main_body/homePage/HomePage"
import Recipe1 from "./components/main_body/recipe/Recipe1"
import Recipe2 from "./components/main_body/recipe/Recipe2"
import Recipe3 from "./components/main_body/recipe/Recipe3"
import Recipe4 from "./components/main_body/recipe/Recipe4"
import AddRecipe from "./components/main_body/addRecipe/AddRecipe"

// import template
import Template from "./components/main_body/template"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
