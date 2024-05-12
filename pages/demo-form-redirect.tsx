import type { NextPage } from "next";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./demo-form-redirect.module.css";
import { FormEvent } from "react";
import React, { useState } from 'react';

const DemoForm1: NextPage = () => {
  const [Name, setName]=useState('')
  const [PhoneNumber, setPhoneNumber]=useState('')
  const [Description, setDescription]=useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = {
      Name,
      PhoneNumber,
      Description
    }

    // submit via api
    const response = await fetch('/api/submit',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await response.json();
    alert("Your review has been submitted.")

    setName('')
    setPhoneNumber('')
    setDescription('')


  }

  
  

  
  return (
    <div className={styles.demoForm1}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeader}>
          <div className={styles.formTitle}>Leave us a feedback</div>
        </div>
        {/* id="review-form" method="post"  action="https://script.google.com/macros/s/AKfycbwZgxJkQg-8qSvoBa2OESxaA6jBkJh8FQLSu0iyNKNoQzExEXBJ0Cyd_ga1Yhru_jJ3/exec" */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formFields}>
            <div className={styles.nameInput}>                      
              <TextField
                className={styles.input}
                color="primary"
                name="Name"
                id="Name"
                label="Name"
                required={true}
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                value={Name}
                onChange={e=>setName(e.target.value)}
              />
            </div>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input}
                color="primary"
                name="PhoneNumber"
                label="Phone Number"
                id="PhoneNumber"
                size="medium"
                required={true}
                variant="outlined"
                type="text"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                value={PhoneNumber}
                onChange={e=>setPhoneNumber(e.target.value)}
              />
            </div>
            <div className={styles.nameInput}>
              <TextField
                className={styles.input2}
                color="primary" 
                name="Description"
                id="Description"
                rows={4}
                label="Description"
                required={true}
                variant="outlined"
                multiline
                value={Description}
                onChange={e=>setDescription(e.target.value)}
              />
            </div>
          </div>
          <button type='submit' className={styles.formSubmitButton}>
            <div className={styles.submit}>Submit</div>
          </button>
        </form> 
        
      </div>
      <div className={styles.demoForm1Inner}>
        <div className={styles.poweredByParent}>
          <div className={styles.poweredBy}>powered by</div>
          <img
            className={styles.letterLogo2}
            alt=""
            src="/letter-logo-2@2x.png"
          />
        </div>
      </div>
      
      
    </div>

    

  );
};

export default DemoForm1;

// import React, { useState } from 'react';
// import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import styles from "./demo-form1.module.css";

// const DemoForm1: NextPage = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const form = event.target as HTMLFormElement;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch('https://script.google.com/macros/s/AKfycbwZgxJkQg-8qSvoBa2OESxaA6jBkJh8FQLSu0iyNKNoQzExEXBJ0Cyd_ga1Yhru_jJ3/exec', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`Error submitting form: ${response.statusText}`);
//       }

//       setSubmitted(true);
//       alert('Your feedback has been submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred while submitting the form. Please try again later.');
//     }
//   };

//   return (
//     <div className={styles.demoForm1}>
//       <div className={styles.shareYourTravelsForm}>
//         <div className={styles.formHeader}>
//           <div className={styles.formTitle}>Leave us a feedback</div>
//         </div>
//         <form id="review-form" method="post" className={styles.form} onSubmit={handleSubmit}>
//           <div className={styles.formFields}>
//             <div className={styles.nameInput}>
//               <TextField
//                 className={styles.input}
//                 color="primary"
//                 name="Name"
//                 label="Name"
//                 required={true}
//                 variant="outlined"
//                 sx={{ "& .MuiInputBase-root": { height: "56px" } }}
//               />
//             </div>
//             <div className={styles.nameInput}>
//               <TextField
//                 className={styles.input}
//                 color="primary"
//                 name="PhoneNumber"
//                 label="Phone Number"
//                 size="medium"
//                 required={true}
//                 variant="outlined"
//                 type="text"
//                 sx={{ "& .MuiInputBase-root": { height: "56px" } }}
//               />
//             </div>
//             <div className={styles.nameInput}>
//               <TextField
//                 className={styles.input2}
//                 color="primary"
//                 name="Description"
//                 rows={4}
//                 label="Description"
//                 required={true}
//                 variant="outlined"
//                 multiline
//               />
//             </div>
//           </div>
//           <button className={styles.formSubmitButton} type="submit">
//             <div className={styles.submit}>Submit</div>
//           </button>
//           {submitted && (
//             <p className={styles.successMessage}>Thank you! Your feedback has been submitted successfully.</p>
//           )}
//         </form>
//       </div>
//       <div className={styles.demoForm1Inner}>
//         <div className={styles.poweredByParent}>
//           <div className={styles.poweredBy}>powered by</div>
//           <img
//             className={styles.letterLogo2}
//             alt=""
//             src="/letter-logo-2@2x.png"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DemoForm1;
