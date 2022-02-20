import React, { useContext } from "react";
import './Dashboard.scss'
import Card from "../../Components/Card";
import MoodCard from "../../Components/MoodCard";
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);

  return (
    <section className='dashboard-page'>
      <h2>Welcome, User! 💎 </h2>
      <Nav />
      <article className='dashboard-quote'>
        { quote }
      </article>
      <section className='stats-section'>
        <article>Stat 1</article>
        <article>Stat 2</article>
        <article>Stat 3</article>
      </section>
      <section className='mood-section'>
        <MoodCard />
      </section>
      <section className="journal-section">
        <Card />
      </section>
    </section>
  );
};

export default Dashboard;
