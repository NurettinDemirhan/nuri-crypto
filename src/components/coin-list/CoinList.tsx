import React, { useEffect, useState } from 'react';
import "./CoinList.css"
import CoinListItem from './coin-list-item/CoinListItem';
import axios from 'axios';





const CoinList: React.FC = () => {

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
        last_updated?:string
    }

    async function fetchingData() {
        try {
          const response = await axios.get("http://localhost:3010/coins");
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        fetchingData(); 
      }, []);

    const coinList: JSX.Element[] = data.map((item:props) => (
        <CoinListItem
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
        />
      ));

  return (
    <div className="coin-list">
        {coinList}
    </div>
  );
}
export default CoinList;