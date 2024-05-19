import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateStudent from './actions/create';
import NewAppBar from './components/newappbar';
import StudentTextField from './components/studentTextField';
import EditStudent from './actions/edit';

function App() {
  return (
    <div className="App">
      <Router>
     <NewAppBar/>
     <Routes>
      <Route exact path="/" element={<StudentTextField/>}/>
      <Route exact path="/addStudent" element={<CreateStudent/>}/>
      <Route exact path="/editStudent" element={<EditStudent/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
