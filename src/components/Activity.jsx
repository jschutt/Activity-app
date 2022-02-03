import { useEffect, useState } from "react";
import "../App.css";

const Activity = ({ participants, changeActivity }) => {
    const [activity, setActivity] = useState([]);

    useEffect(async () => {
        if(participants !== "none"){
            let response = await fetch(`http://www.boredapi.com/api/activity?participants=${participants}`);
            let json = await response.json();
            setActivity(json);
        } else {
            let response = await fetch(`http://www.boredapi.com/api/activity/`);
            let json = await response.json();
            setActivity(json);
        }
    }, [changeActivity])

  return (
    <div className="activityContainer">
      <h4>{activity.activity}</h4>
      <h5>Type: {activity.type}</h5>
      <h5>Participants: {activity.participants}</h5>
    </div>
  );
};

export default Activity;
