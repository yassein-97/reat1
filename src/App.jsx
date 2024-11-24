
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './coponents/Home/Home';
import About from './coponents/About/About';
import Parent from './coponents/Parent/Parent';
import Layout from './coponents/Layout/Layout';

function App() {

let router =  createBrowserRouter([
  {path:"" , element:<Layout/> ,children:[
    {path:"layout" , element:<Layout/> },
  {path:"home" , element:<Home/> },
  {path:"about", element:<About />},
  {path:"parent", element:<Parent />},
  {path:"*", element:<div className='h-screen bg-red-500 flex justify-center items-center'><h1>404</h1></div>}
  ]},
]);

  return <>
  
  <RouterProvider  router={router}/>
  </>
}

export default App
