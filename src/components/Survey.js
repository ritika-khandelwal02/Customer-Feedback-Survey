import React, { useState, useEffect } from 'react';
import Question from './Question';
import ThankYou from './ThankYou';
import { saveAnswer, getAnswers, generateSessionId } from '../utils/localStorage';
import '../App.css';


const Survey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(getAnswers());
  const [sessionId, setSessionId] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "How satisfied are you with our products?",
      type: "rating",
      min: 1,
      max: 5,
    },
    {
      id: 2,
      text: "How fair are the prices compared to similar retailers?",
      type: "rating",
      min: 1,
      max: 5,
    },
    {
      id: 3,
      text: "How satisfied are you with the value for money of your purchase?",
      type: "rating",
      min: 1,
      max: 5,
    },
    {
      id: 4,
      text: "On a scale of 1-10 how would you recommend us to your friends and family?",
      type: "rating",
      min: 1,
      max: 10,
    },
    {
      id: 5,
      text: "What could we do to improve our service?",
      type: "text",
    }
  ];

  useEffect(() => {
    if (!sessionId) {
      setSessionId(generateSessionId());
    }
  }, [sessionId]);

  const handleAnswerChange = (questionId, answer) => {
    const updatedAnswers = { ...answers, [questionId]: answer };
    setAnswers(updatedAnswers);
    saveAnswer(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = () => {
    setIsCompleted(true);
    saveAnswer({ ...answers, completed: true, sessionId });
  };

  if (isCompleted) {
    return <ThankYou />;
  }

  return (
    <div className="survey-container">
      <div>
        <h3>{`Question ${currentQuestionIndex + 1} / ${questions.length}`}</h3>
        <Question
          question={questions[currentQuestionIndex]}
          answer={answers[questions[currentQuestionIndex].id]}
          onAnswerChange={handleAnswerChange}
        />
        <div className="navigation">
          {currentQuestionIndex > 0 && (
            <button onClick={handlePrevious}>Previous</button>
          )}
          <button onClick={handleSkip}>Skip</button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Survey;
