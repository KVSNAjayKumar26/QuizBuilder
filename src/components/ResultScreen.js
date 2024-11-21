import React from 'react'
import { motion } from 'framer-motion';
import { Button, Card, CardContent, Typography } from '@mui/material';
const ResultScreen = ({ userAnswers, quizData, onRestartQuiz}) => {
    // Calculate the score
    const calculateScore = () => {
        return quizData.reduce((score, question, index) => {
            // Assume the first option is always the correct one (this can be modified based on your logic)
            if (userAnswers[index] === question.correctAnswer) {
                score++;
            }
            return score;
        }, 0);
    };

    const score = calculateScore();
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    style={{ textAlign: "center" }}
    >
        <h2>Quiz Results</h2>
        <Card style={{ marginBottom: "20px", backgroundColor: "#f5f5f5" }}>
            <CardContent>
                <Typography variant='h6' gutterBottom>
                    Your Score: {score} / {quizData.length}
                </Typography>
                {quizData.map((question, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <Typography variant='body1'>
                            <strong>{index + 1}. {question.question}</strong>
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                            Your Answer: {userAnswers[index]}
                        </Typography>
                        <Typography variant='body2' color='textPrimary'>
                            Correct Answer: {question.correctAnswer}
                        </Typography>
                    </div>
                ))}
            </CardContent>
            <Button variant='contained' color='primary' onClick={onRestartQuiz}>
                Restart Quiz
            </Button>
        </Card>
    </motion.div>
  );
};

export default ResultScreen;