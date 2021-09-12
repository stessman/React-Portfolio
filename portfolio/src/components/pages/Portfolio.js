import React from 'react';
import idkYouPick from './assets/img/IDK_You_Pick.png';
import pawsNPals from './assets/img/PawsnPals.png';
import techBlog from './assets/img/Tech_Blog_homepage.png';
import noteTaker from './assets/img/Note_Taker.png';
import weatherDashboard from './assets/img/weatherDashboard.png';

export default function Home() {
  return (
    <div>
      <h1>Portfolio</h1>
      <h3>IDK, You Pick</h3>
      <img alt="idkYouPick_image" src={idkYouPick}></img>
      <a href="https://github.com/stessman/Group-Collaboration"  target="_blank" rel="noreferrer">Github link</a>
      <a href="https://scoven2.github.io/Group-Collaboration/"  target="_blank" rel="noreferrer">link to site</a>

      <h3>Paws and Pals - Pet Shelter</h3>
      <img alt="pawsNPals_image" src={pawsNPals}></img>
      <a href="https://github.com/stessman/Project-2"  target="_blank" rel="noreferrer">Github link</a>
      <a href="https://sleepy-cove-71764.herokuapp.com/"  target="_blank" rel="noreferrer">link to site</a>

      <h3>Tech Blog</h3>
      <img alt="techBlog_image" src={techBlog}></img>
      <a href="https://github.com/stessman/Tech-Blog"  target="_blank" rel="noreferrer">Github link</a>
      <a href="https://calm-crag-87567.herokuapp.com/"  target="_blank" rel="noreferrer">link to site</a>

      <h3>Note Taker</h3>
      <img alt="noteTaker_image" src={noteTaker}></img>
      <a href="https://github.com/stessman/Note-Taker"  target="_blank" rel="noreferrer">Github link</a>
      <a href="https://safe-hollows-62419.herokuapp.com/"  target="_blank" rel="noreferrer">link to site</a>

      <h3>Weather Dashboard</h3>
      <img alt="weatherDashboard_image" src={weatherDashboard}></img>
      <a href="https://github.com/stessman/06-Weather-Dashboard"  target="_blank" rel="noreferrer">Github link</a>
      <a href="https://stessman.github.io/06-Weather-Dashboard/"  target="_blank" rel="noreferrer">link to site</a>

      <h3>Workout Tracker FINISH ME</h3>
      <img alt="workoutTracker_image" src=""></img>
      <a href="https://github.com/stessman/Workout-Tracker"  target="_blank" rel="noreferrer">Github link</a>
      <a href="finishme"  target="_blank" rel="noreferrer">link to site</a>
    </div>
  );
}
