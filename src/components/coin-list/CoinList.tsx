import React, { useEffect, useState } from 'react';
import "./CoinList.css"
import CoinListItem from './coin-list-item/CoinListItem';
import axios from 'axios';
import ListHeader from '../list-header/ListHeader';

// interface coinListProps  {
//   coinData: any[];
// };


const CoinList = () => {
  // const { coinData } = prop;
    const [data ,setData] = useState([]);

    
    
    interface props {
        
        name: string,
        image: string,
        current_price: number,
        symbol:string,
        market_cap?:number,
        total_volume?:number,
        high_24h?:number,
        low_24h?:number,
        price_change_24h?:number,
        price_change_percentage_24h?:number| undefined,
        market_cap_change_24h?:number,
        market_cap_change_percentage_24h?:number,
        last_updated?:string,
        market_cap_rank?:number
    }

    async function fetchingData() {
        try {
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        fetchingData(); 
      }, []);

    const coinList: JSX.Element[] = data
    .slice(0,10)
    .map((item:props) => (
        <CoinListItem
          key={item.market_cap_rank}
          price_change_percentage_24h={item.price_change_percentage_24h}
          name={item.name}
          image={item.image}
          price={item.current_price}
          symbol={item.symbol}
          market_cap={item.market_cap}
          total_volume={item.total_volume}
          high_24h={item.high_24h}
          low_24h={item.low_24h}
          price_change_24h={item.price_change_24h}
          market_cap_change_24h={item.market_cap_change_24h}
          market_cap_change_percentage_24h={item.market_cap_change_percentage_24h}
          last_updated={item.last_updated}
          market_cap_rank={item.market_cap_rank}
          asd={false}
        />
      ));

  return (
    <div className="coin-list">
      <h1>TOP 10 CURRENCIES</h1>
        {/* <ListHeader/> */}
        {coinList}
    </div>
  );
}
export default CoinList;