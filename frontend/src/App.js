

import Header from './component/Header/Header';
import './bootstrap.min.css'
import Footer from './component/Footer/Footer';
import Accord from './component/Accord/Accord';
import LandingPage from './Screens/LandingPage/LandingPage';
import { BrowserRouter,Route } from 'react-router-dom';
import MyNotes from './Screens/MyNotes/MyNotes';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
    <Route path="/"component={LandingPage} exact />
    <Route path="/mynotes"component={MyNotes} exact/>
    <Route path="/accord"component={Accord} exact/>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
