import { Route, Routes } from 'react-router-dom';
import SelectProjects from './components/Projects';
import Portfolio from './components/Portfolio';

function App() {
    return (
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/projects" element={<SelectProjects/>} />
      </Routes>
    );
  }

  export default App;
