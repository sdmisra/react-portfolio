import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WelcomePage from '../WelcomePage/WelcomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import AboutMe from '../AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <Header />
      <section className='center-content'>
      <Routes>
        <Route path = '/' element ={<WelcomePage />}/>
        <Route path = '/projects' element ={<ProjectsPage />} />
        <Route path = '/aboutme' element = {<AboutMe/>} />
      </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;