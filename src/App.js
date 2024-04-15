import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Test from './views/Test'
import AuthNav from './views/auth-nav'
import Home from './views/home'
import Login from './views/login'
import NotFound from './views/not-found'
import Register from './views/register'
import Sell from './views/sell'
import Shop from './views/shop'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Test/>} exact path = "/test" />
        <Route element={<AuthNav/>} exact path="/auth-nav" />
        <Route element={<Home/>} exact path="/" />
        <Route element={<Login/>} exact path="/login" />
        <Route element={<Register/>} exact path="/register" />
        <Route element={<Sell/>} exact path="/sell" />
        <Route element={<Shop/>} exact path="/shop" />
        <Route element={<NotFound/>}  path="/notfound" />
        <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
    </Router>
  );
}

export default App;
