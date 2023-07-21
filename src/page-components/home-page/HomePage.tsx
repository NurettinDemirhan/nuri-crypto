import React, {useState} from 'react';
import Header from '../../components/header/Header';
import Title from '../../components/title/Title';
import CoinList from '../../components/coin-list/CoinList';
import "./HomePage.css";
import PersonalCoinList from '../../components/personal-coin-list/PersonalCoinList';
import axios from 'axios';
import Footer from '../../components/footer/Footer';


 const HomePage: React.FC = () => {

  const [data ,setData] = useState<any[]>([]);


  
  

  return (
    <div className="HomePage">
        <Header/>
        <Title/>
        <PersonalCoinList/>
        <CoinList />
        
    </div>
  );
}
export default HomePage;