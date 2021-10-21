import React, {useState} from 'react';
import '../../styles/contactPage.css';
import { validateEmail } from '../../utils/helpers';



export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailDisplay, setEmailDisplay] = useState('none');
  const [fieldDisplay, setFieldDisplay] = useState('none');
  const [nameEmpty, setNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [messageEmpty, setMessageEmpty] = useState(true);
  const [submitButton, setSubmitButton] = useState(true);

 const styles = {
     email: {
      display: emailDisplay
     },
     fields: {
      display: fieldDisplay
     }
     };

  const handleInputChange = (e)=> {
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
      if(inputValue.trim() === ''){
        setNameEmpty(true);
      } else{
        setNameEmpty(false);
      }
    } else if (inputType === 'email') {
      setEmail(inputValue);
      if(inputValue.trim() === ''){
        setEmailEmpty(true);
      } else{
        setEmailEmpty(false);
      }
    } else if (inputType === 'message') {
      setMessage(inputValue);
      if(inputValue.trim() === ''){
        setMessageEmpty(true);
      } else{
        setMessageEmpty(false);
      }
    }
    checkFields();
  };

  //Checks to see if the fields are satisfied, if not then then submit button is disabled
  const checkFields = () => {
    console.log(emailEmpty, nameEmpty, messageEmpty);
    if(emailEmpty === true || nameEmpty === true || messageEmpty === true){
      setSubmitButton(true);
    } else if(!validateEmail(email)){
      setSubmitButton(true);
    }else{
      setSubmitButton(false);
    }
  }

  const onBlur = () => {
    if(!validateEmail(email)){
      setEmailDisplay('flex');
    }else{
      setEmailDisplay('none');
    }
  }

  const fieldBlur = e => {
    let target = e.target;
    let inputType = target.name;
    let inputValue = target.value;

    if (inputType === 'name' || inputType === 'message') {
      if(inputValue.trim() === ''){
        setFieldDisplay('flex')
      } else {
        setFieldDisplay('none')
      }
  }
}

  return (
    <div className="container">
    <div className="formContainer">
    <form action="mailto:scott.tessm@gmail.com" method="POST" encType="multipart/form-data"name="EmailForm">
    <label for="fname">Name:</label>
    <input className="" type="text" id="name" name="name" value={name} onChange={handleInputChange} onBlur={fieldBlur}/>
    <label for="lname">Email:</label>
    <input type="text" id="email" name="email" value={email} onChange={handleInputChange} onBlur={onBlur}/>
    <label for="lname">Message:</label>
    <input type="text" id="message" name="message" value={message} onChange={handleInputChange} onBlur={fieldBlur}/>
    <p>Or feel free to contact me directly at 'scott.tessm@gmail.com'</p>
    <p style={styles.email}>Please enter a valid email address</p>
    <p style={styles.fields}>Please fill out all fields</p>
    <input disabled={submitButton} className="submitButton" type="submit" value="Submit"></input>
    </form>
    </div>
    </div>
  );
}

