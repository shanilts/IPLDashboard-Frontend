
import './App.css';
import { TeamPage } from './pages/TeamPage';
import { BrowserRouter as RootRouter,Routes, Route } from "react-router-dom";
import { MatchPage } from './pages/MatchPage';

function App() {
  return (

    <div className="App">
      <RootRouter>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
      </RootRouter>

    </div>
  );
}

export default App;
