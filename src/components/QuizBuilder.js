import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { motion } from 'framer-motion';
import { Button, TextField } from '@mui/material';
const QuizBuilder = ({ setQuizData }) => {
    const { control, register, handleSubmit } = useForm({
        defaultValues: { questions: [{ question: "", options: ["", ""]}]},
    });
    const { fields, append, remove } = useFieldArray({ control, name: "questions"});

    const onSubmit = (data) => setQuizData(data.questions);
  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    >
        <h2>Create Your Quiz</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={field.id} style={{ marginBottom: "20px" }}>
                    <TextField
                    {...register(`questions.${index}.question`)}
                    label={`Question ${index + 1}`}
                    variant='outlined'
                    fullWidth
                    style={{ marginBottom: "10px" }}
                    />
                    {field.options.map((_, optIndex) => (
                        <TextField
                        {...register(`questions.${index}.options.${optIndex}`)}
                        label={`Option ${optIndex + 1}`}
                        variant='outlined'
                        fullWidth
                        key={optIndex}
                        style={{ marginBottom: "5px" }}
                        />
                    ))}
                    <Button onClick={() => remove(index)} variant='outlined' color='error'>
                        Remove Question
                    </Button>
                </div>
            ))}
            <Button onClick={() => append({ question: "", options: ["", ""]})}>
                Add Question
            </Button>
            <Button type='submit' variant='contained' color='primary' style={{ marginTop: "20px"}}>
                Save Quiz
            </Button>
        </form>
    </motion.div>
  );
};

export default QuizBuilder;