export const saveAnswer = (sessionId, answers) => {
    localStorage.setItem(`answers_${sessionId}`, JSON.stringify(answers));
  };
  
  export const getAnswers = (sessionId) => {
    const savedAnswers = localStorage.getItem(`answers_${sessionId}`);
    return savedAnswers ? JSON.parse(savedAnswers) : [];
  };
  
  export const generateSessionId = () => {
    return `session_${Math.random().toString(36).substr(2, 9)}`;
  };
  
  export const clearAnswers = (sessionId) => {
    localStorage.removeItem(`answers_${sessionId}`);
    localStorage.removeItem('surveyStatus');  // Optionally clear the survey status flag too
  };
  
