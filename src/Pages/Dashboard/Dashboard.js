import React, { useContext } from "react";
import './Dashboard.scss'
import Card from "../../Components/Card";
import MoodCard from "../../Components/MoodCard";
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";
import { UserContext } from "../../Contexts/UserContext";
import JournalContainer from "../../Components/JournalContainer";
import MoodContainer from "../../Components/MoodContainer";
import kanyebearface from "../../Assets/Bears/kanyebearface.png"
// import { createTime } from "../../Utilities/Date";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);
  const { user } = useContext(UserContext);

  return (
    <section className="dashboard-page">
      <section className='nav-section'>
        <Nav />
        <h2>Welcome, {user}!</h2>
        <img className='bear-face' alt='bear head wearing glasses' src={kanyebearface} />
      </section>
      <article
        data-testid="dashboard-quote"
        className="dashboard-quote fade-in-fwd"
      >
        "{quote}"
      </article>
      {/* <section className='stats-section'>
        <article>Stat 1</article>
        <article>Stat 2</article>
        <article>Stat 3</article>
      </section> */}
      <MoodContainer data-testid="mood-section" />
      <JournalContainer />
    </section>
  );
};

export default Dashboard;
