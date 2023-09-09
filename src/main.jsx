import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import Nav from './Components/Nav'
import HomePost from './Map/AllPost'
import SinglePost from './Map/SinglePost'
import SearchBar from './Components/SearchBar'
// import SearchBar from './Components/SearchBar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store ={store}>
      <Nav/>
      <SearchBar/>
      <Routes>
      <Route path={"/posts"} element={<HomePost/>}/>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/profile"} element={<ProfilePage/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
