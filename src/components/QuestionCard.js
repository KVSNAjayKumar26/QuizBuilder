import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
const QuestionCard = ({ question, options, index, onOptionSelect }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
        <Card style={{ marginBottom: "20px", backgroundColor: "#f5f5f5"}}>
            <CardContent>
                <Typography variant='h6' style={{ marginBottom: "10px" }}>
                    {index + 1}. {question}
                </Typography>
                <RadioGroup
                name={`question-${index}`}
                onChange={(e) => onOptionSelect(index, e.target.value)}
                >
                    {options.map((option, optIndex) => (
                        <FormControlLabel
                        key={optIndex}
                        value={option}
                        control={<Radio />}
                        label={option}
                        />
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    </motion.div>
  );
};

export default QuestionCard;