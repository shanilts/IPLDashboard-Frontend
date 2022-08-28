
import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { BrowserRouter as RootRouter,Routes, Route } from "react-router-dom";
import { MatchPage } from './pages/MatchPage';
import HomePage from './pages/HomePage';

function App() {
  return (

    <div className="App">
      <RootRouter>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </RootRouter>

    </div>
  );
}

export default App;
