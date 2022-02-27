import kanye1 from "../Assets/kanye1.png"
import kanye2 from "../Assets/kanye2.png"
import kanye3 from "../Assets/kanye3.png"
import kanye4 from "../Assets/kanye4.png"
import kanye5 from "../Assets/kanye5.png"

const setImages = (mood) => {
    let emoji, emotion;

    switch(mood) {
        case 1:
            emoji= kanye1;
            emotion='Sad and Devastated Kanye Face on slider';
            break;
        case 2:
           emoji= kanye2;
           emotion= 'Somewhat Sad Kanye Face on slider';
           break;
        case 3:
            emoji= kanye3;
            emotion='Neutral Kanye Face on slider';
            break;
        case 4:
            emoji= kanye4;
            emotion='Somewhat Happy Kanye Face on slider';
            break;
        case 5:
            emoji= kanye5;
            emotion='Extremely Happy Kanye Face on slider';
            break;

    }
    return (
      <>
        <img
          className="roll-in-left"
        //   className="kanye-mood dashboard-face"
          src={emoji}
          alt={emotion}
        />
      </>
    );}

export default setImages;
