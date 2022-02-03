import "./App.css";
import { useState } from "react";
import Activity from "./components/Activity.jsx";

function App() {
  const [participants, setParticipants] = useState("none");
  const [changeActivity, setChangeActivity] = useState(false)

  let getParticipants = () => {
    const myParticipants = document.querySelector('input[name="participants"]:checked').value;
    setParticipants(myParticipants);
    console.log(myParticipants)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Choose participants: </h3>
        <div className="radioBtn">
        <label htmlFor="participantsOne">1: </label>
        <input type="radio" id="participants" name="participants" value="1"/>
        </div>
        <div className="radioBtn">
        <label htmlFor="participantsTwo">2: </label>
        <input type="radio" id="participants" name="participants" value="2"/>
        </div>
        <div className="radioBtn">
        <label htmlFor="participantsFour">4: </label>
        <input type="radio" id="participants" name="participants" value="4"/>
        </div>
        <div className="radioBtn">
        <label htmlFor="participantsNone">None: </label>
        <input type="radio" id="participants" name="participants" value="none"/>
        </div>
        <div className="btnContainer">
          <button className="activityBtn" 
            onClick={() => {getParticipants(); setChangeActivity(!changeActivity)
            }}
          >
            Find activity!
          </button>
          <Activity participants={participants} changeActivity={changeActivity}/>
        </div>
      </header>
    </div>
  );
}

export default App;
