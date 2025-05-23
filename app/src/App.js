import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/main_body/HomePage"
import Recipe from "./components/main_body/Recipe"
import AddRecipe from "./components/main_body/AddRecipe"

// import template
import Template from "./components/main_body/template"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add_recipe" element={<AddRecipe />} />
        {/* template link */}
        <Route path="/template" element={<Template />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
