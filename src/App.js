import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import CardData from './components/CardData/CardData';
import Card from './components/Card/Card';

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
    path : '/cardData',
    loader: async()=>{
       return fetch('www.themealdb.com/api/json/v1/1/search.php?s')
    },
    element : <CardData></CardData>
  }
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
