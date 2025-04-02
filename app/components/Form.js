import React from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
     const testEmailJSConnection = () => {
          emailjs.send(
            'service_2hai2nx',
            'template_gsqnh0e',
            {
              name: 'Test User',
              email: 'test@example.com',
              phone: '1234567890',
              description: 'Test message',
              contact_preferences: 'Email'
            },
            '0rv38QLal2gWRPuD8'
          )
          .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Test email sent successfully!');
          })
          .catch(err => {
            console.log('FAILED...', err);
            alert('Test failed: ' + JSON.stringify(err));
          });
        };
     return (
          <div>
               <button
                    type="button"
                    onClick={testEmailJSConnection}
                    className="text-sm bg-gray-200 p-2 rounded"
               >
                    Test EmailJS Connection
               </button>sm
          </div>
     )
}

export default Form