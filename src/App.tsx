import React from 'react';
import './App.scss';
import {Routes,Route} from 'react-router-dom'
import { MainTitle } from './components/MainTitle/MainTitle';



const App: React.FC = () => {
  return (
    <div>
      <Routes>
         <Route path="/" element={<MainTitle />} />
        
      </Routes>
    </div>
  );
}

export default App;
