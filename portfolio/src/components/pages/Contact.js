import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>

    <form>
    <label for="fname">Name:</label>
    <input type="text" id="name" name="name"/>
    <label for="lname">Email:</label>
    <input type="email" id="email" name="email"/>
    <label for="lname">Message:</label>
    <input type="text" id="message" name="message"/>
    <input type="submit" value="Submit"></input>
    </form>
    </div>
  );
}
