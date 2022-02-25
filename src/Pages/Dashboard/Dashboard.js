import React, { useContext } from "react";
import './Dashboard.scss'
import Card from "../../Components/Card";
import MoodCard from "../../Components/MoodCard";
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";
import { UserContext } from "../../Contexts/UserContext";
import JournalContainer from "../../Components/JournalContainer";
import MoodContainer from "../../Components/MoodContainer";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);
  const { user } = useContext(UserContext);
  // console.log(user.firstName)
 

  return (
    <section className='dashboard-page'>
      <h2>Welcome, { user[0] }! 💎 </h2>
      <Nav />
      <article data-testid='dashboard-quote' className='dashboard-quote'>
        { quote }
      </article>
      {/* <section className='stats-section'>
        <article>Stat 1</article>
        <article>Stat 2</article>
        <article>Stat 3</article>
      </section> */}
      <MoodContainer data-testid='mood-section'/>
      <JournalContainer />
    </section>
  );
};

export default Dashboard;
