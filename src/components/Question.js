import React from 'react';

const Question = ({ question, answer, onAnswerChange }) => {
  const handleRatingChange = (e) => {
    onAnswerChange(question.id, parseInt(e.target.value, 10));
  };

  const handleTextChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  return (
    <div className="question-container">
      <h4>{question.text}</h4>
      {question.type === 'rating' && (
        <div>
          {[...Array(question.max)].map((_, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={idx + 1}
                checked={answer === idx + 1}
                onChange={handleRatingChange}
              />
              {idx + 1}
            </label>
          ))}
        </div>
      )}
      {question.type === 'text' && (
        <textarea value={answer || ''} onChange={handleTextChange} />
      )}
    </div>
  );
};

export default Question;
