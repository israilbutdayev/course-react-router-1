import './App.css';
import {RouterProvider ,createBrowserRouter, createRoutesFromElements, Route, NavLink, Outlet} from 'react-router-dom'
import Samples from './components/Samples';
import Contact from './components/Contact';
import About from './components/About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Samples/>}/>
    <Route path='samples' element={<Samples/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='about' element={<About/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

function Layout (){
  return <header>
    <nav className='NavBar'>
          <NavLink to='samples'>Samples</NavLink>
          <NavLink to='contact'>Contact</NavLink>
          <NavLink to='about'>About</NavLink>
    </nav>
    <Outlet />
  </header>
}

export default App;
