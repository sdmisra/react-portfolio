import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WelcomePage from '../WelcomePage/WelcomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
      <Route path = '/' element ={<WelcomePage />}/>
      <Route path = '/projects' element ={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;