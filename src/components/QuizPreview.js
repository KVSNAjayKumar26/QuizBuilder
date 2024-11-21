import React, { useState } from 'react'
import { motion } from 'framer-motion'
import QuestionCard from './QuestionCard';
import QuizBuilder from './QuizBuilder';
import ResultScreen from './ResultScreen';
const QuizPreview = ({ quizData }) => {
    const  [selectedAnswers, setSelectedAnswers] = useState({});
    const [userAnswers, setUserAnswers] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionSelect = (questionIndex, selectedOption) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: selectedOption,
        }));
    };

    const handleQuizCompletion = () => {
        setQuizCompleted(true);
    };

    const restartQuiz = () => {
        setQuizCompleted(false);
        setUserAnswers({});
    }
  return (
    <><div>
        <h2>Take the Quiz</h2>
        {quizData.map((q, idx) => (
            <QuestionCard
            key={idx}
            index={idx}
            question={q.question}
            options={q.options}
            onOptionSelect={handleOptionSelect}
            />
        ))}
        <button
        onClick={() => console.log(selectedAnswers)}
        style={{ marginTop: "20px" }}
        >
            Submit Quiz
        </button>
      </div>
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
      >
              <h2>Quiz Preview</h2>
              {quizData.map((q, idx) => (
                  <div key={idx} style={{ marginBottom: "20px" }}>
                      <h3>{q.question}</h3>
                      <ul>
                          {q.options.map((opt, optIdx) => (
                              <li key={optIdx}>{opt}</li>
                          ))}
                      </ul>
                  </div>
              ))}
          </motion.div>

          <div>
            {!quizCompleted ? (
                <QuizBuilder
                quizData={quizData}
                onOptionSelect={handleOptionSelect}
                onQuizComplete={handleQuizCompletion}
                />
            ) : (
                <ResultScreen
                userAnswers={userAnswers}
                quizData={quizData}
                onRestartQuiz={restartQuiz}
                />
            )}
          </div>
          </>
  );
};

export default QuizPreview;