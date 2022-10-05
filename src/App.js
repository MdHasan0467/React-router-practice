import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import CardData from './components/CardData/CardData';
import Card from './components/Card/Card';
import Cocktails from './components/Cocktails/Cocktails';

function App() {
  const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children: [
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
    path : '/meal',
    loader: async()=>{
       return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    },
    element : <CardData></CardData>
      },
      {
    path : '/cocktail',
    loader: async()=>{
       return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
    },
    element : <Cocktails></Cocktails>
  },
    ],
    
  },
  
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
