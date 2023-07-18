import React from 'react';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import CoinList from '../../components/coin-list/CoinList';
import "./HomePage.css";


 const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
        <Header/>
        <Title/>
        <CoinList/>
    </div>
  );
}
export default HomePage;