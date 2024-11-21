import React, { useState } from 'react'
import QuizBuilder from './components/QuizBuilder';
import QuizPreview from './components/QuizPreview';

const App = () => {
  const [quizData, setQuizData] = useState([]);

  return (
    <div className='App'>
      <h1>Quiz Builder Tool</h1>
      <QuizBuilder setQuizData={setQuizData} />
      {quizData.length > 0 && <QuizPreview quizData={quizData} />}
    </div>
  );
};

export default App;