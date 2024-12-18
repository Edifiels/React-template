import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import './styles/globals.css';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
}

export default App;