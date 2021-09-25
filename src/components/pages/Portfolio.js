import React from 'react';
import idkYouPick from './assets/img/IDK_You_Pick.png';
import pawsNPals from './assets/img/PawsnPals.png';
import techBlog from './assets/img/Tech_Blog_homepage.png';
import noteTaker from './assets/img/Note_Taker.png';
import weatherDashboard from './assets/img/weatherDashboard.png';
import workoutTracker from './assets/img/WorkoutTracker_Landing.PNG';
import '../../styles/portfolioPage.css';

export default function Home() {
  return (
    <div className="container portContainer">
      <div className="row">
      <div className="col">
      <h3 className="portHeader">IDK, You Pick</h3>
      <a href="https://scoven2.github.io/Group-Collaboration/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="idkYouPick_image" src={idkYouPick}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/Group-Collaboration"  target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <div className="col">
      <h3 className="portHeader">Paws and Pals - Pet Shelter</h3>
      <a href="https://sleepy-cove-71764.herokuapp.com/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="pawsNPals_image" src={pawsNPals}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/Project-2"  target="_blank" rel="noreferrer">GitHub</a>
      </div>
      </div>

      <div className="row">
      <div className="col">
      <h3 className="portHeader">Tech Blog</h3>
      <a href="https://calm-crag-87567.herokuapp.com/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="techBlog_image" src={techBlog}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/Tech-Blog"  target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <div className="col">
      <h3 className="portHeader">Note Taker</h3>
      <a href="https://safe-hollows-62419.herokuapp.com/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="noteTaker_image" src={noteTaker}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/Note-Taker"  target="_blank" rel="noreferrer">GitHub</a>
      </div>
      </div>

      <div  className="row">
      <div className="col">
      <h3 className="portHeader">Weather Dashboard</h3>
      <a href="https://stessman.github.io/06-Weather-Dashboard/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="weatherDashboard_image" src={weatherDashboard}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/06-Weather-Dashboard"  target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <div className="col">
      <h3 className="portHeader">Workout Tracker</h3>
      <a href="https://shielded-bayou-98170.herokuapp.com/" target="_blank" rel="noreferrer">
      <img className="portImg" alt="workoutTracker_image" src={workoutTracker}></img>
      </a>
      <a className="ghLink" href="https://github.com/stessman/Workout-Tracker"  target="_blank" rel="noreferrer">GitHub</a>
      </div>
      </div>
    </div>
  );
}
