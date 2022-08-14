
import './App.css';
import { TeamPage } from './pages/TeamPage';
import { BrowserRouter as RootRouter,Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <RootRouter>
        <Routes>
          <Route path="/teams/:teamName" element={<TeamPage />} />
        </Routes>
      </RootRouter>

    </div>
  );
}

export default App;
