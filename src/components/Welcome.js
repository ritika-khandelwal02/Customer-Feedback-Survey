import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div class="welcome-container">
      <h1>Welcome to our Survey!</h1>
      <p>We would appreciate your feedback.</p>
      <button onClick={onStart}>Start Survey</button>
    </div>
  );
};

export default Welcome;
