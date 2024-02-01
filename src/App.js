import './App.css';
import DataList from './Components/DataLists';
import NotFoundPage from './Components/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import Details from './Components/Details';

function App() {

  return (
    <div  className="App">
        <Routes>
          <Route path='/' exact Component={DataList}/>
          <Route path='/summary/:id'  Component={Details}/>
          <Route path='/*'  Component={NotFoundPage}/>
        </Routes>
    </div>
  );
}

export default App;
