import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WelcomePage from '../WelcomePage/WelcomePage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <ProjectsPage />
      <Footer />
    </div>
  );
}

export default App;