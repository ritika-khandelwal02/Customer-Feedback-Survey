import React, { useState } from 'react';
import Survey from './components/Survey';
import Welcome from './components/Welcome';
import './App.css';

const App = () => {
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);

  const handleStartSurvey = () => {
    setIsSurveyStarted(true);
  };

  return (
    <div className="App">
      {!isSurveyStarted ? (
        <Welcome onStart={handleStartSurvey} />
      ) : (
        <Survey />
      )}
    </div>
  );
};

export default App;
