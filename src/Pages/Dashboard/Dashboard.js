import React, { useContext } from "react";
import Card from "../../Components/Card";
import MoodCard from "../../Components/MoodCard";
import { QuoteContext } from '../../Contexts/QuoteContext';
import Nav from "../../Components/Nav";


const Dashboard = () => {

  const { quote } = useContext(QuoteContext);

  return (
    <section>
      <h2>Welcome, User! 💎 </h2>
      { quote }
      <Card />
      <MoodCard />
      <Nav />
    </section>
  );
};

export default Dashboard;
