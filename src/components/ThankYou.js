import React, { useEffect } from 'react';
import '../App.css';

const ThankYou = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload(); // Reset the app to show the welcome screen
    }, 5000);
  }, []);

  return (
    <div className="thank-you-container">
      <h1>Thank you for your time!</h1>
      <p>Your survey has been submitted successfully.</p>
      <p>You will be redirected shortly...</p>    
      </div>
  );
};

export default ThankYou;
