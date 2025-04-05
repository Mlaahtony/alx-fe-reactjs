import React from 'react';
// Import either or both forms
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Form Handling</h1>
      
      {/* Uncomment one of the following lines depending on what you want to display */}
      
      {/* <RegistrationForm /> */}
      <FormikForm />
    </div>
  );
}

export default App;

