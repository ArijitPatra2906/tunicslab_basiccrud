import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentPageView from './view/StudentPageView';
import DashboardView from './view/DashboardView';
import EditStudent from './Page/StudentPage/EditStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardView />} />
          <Route path='/student' element={<StudentPageView />} />
          <Route path='student/:id' element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
