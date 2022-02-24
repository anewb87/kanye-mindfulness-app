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
            emotion='sad kanye face'
            break;
        case 2:
           emoji= kanye2;
           emotion= 'kinda sad kanye face'
           break;
        case 3:
            emoji= kanye3;
            emotion='neutral kanye face'
            break;
        case 4:
            emoji= kanye4;
            emotion='kinda happy kanye face'
            break;
        case 5:
            emoji= kanye5;
            emotion='very happy kanye face'
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
