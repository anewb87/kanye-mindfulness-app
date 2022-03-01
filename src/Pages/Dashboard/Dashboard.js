import React, { useContext } from "react";
import './Dashboard.scss';
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";
import JournalContainer from "../../Components/JournalContainer";
import MoodContainer from "../../Components/MoodContainer";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);

  return (
    <section className="dashboard-page">
      <Nav />
      <article
        data-testid="dashboard-quote"
        className="dashboard-quote fade-in-fwd"
      >
        "{quote}"
      </article>
      <MoodContainer data-testid="mood-section" />
      <JournalContainer />
    </section>
  );
};

export default Dashboard;
