

import Header from './component/Header/Header';
import './bootstrap.min.css'
import Footer from './component/Footer/Footer';

import LandingPage from './Screens/LandingPage/LandingPage';
import { BrowserRouter,Route } from 'react-router-dom';
import MyNotes from './Screens/MyNotes/MyNotes';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Route path="/"component={LandingPage} exact />
    <Route path="/mynotes"component={MyNotes} exact/>
    <Route path="/login"component={LoginScreen} exact/>
    <Route path="/register"component={RegisterScreen} exact/>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
