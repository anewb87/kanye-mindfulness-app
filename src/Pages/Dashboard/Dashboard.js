import React, { useContext } from "react";
import './Dashboard.scss'
import Card from "../../Components/Card";
import MoodCard from "../../Components/MoodCard";
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";
import { UserContext } from "../../Contexts/UserContext";
import JournalContainer from "../../Components/JournalContainer";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);
 
  // const entries = journal.map((entry) => {
  //   return (
  //     <article className='journal-cards' data-testid='journal-entry' key={entry.id}>
  //       <h2>{entry.date}</h2>
  //       <p>{entry.body}</p>
  //     </article>
  //   )
  // });

  return (
    <section className='dashboard-page'>
      <h2>Welcome, User! 💎 </h2>
      <Nav />
      <article data-testid='dashboard-quote' className='dashboard-quote'>
        { quote }
      </article>
      {/* <section className='stats-section'>
        <article>Stat 1</article>
        <article>Stat 2</article>
        <article>Stat 3</article>
      </section> */}
      <section className='mood-section' data-testid='mood-section'>
        <MoodCard />
      </section>
      <JournalContainer />
    </section>
  );
};

export default Dashboard;
