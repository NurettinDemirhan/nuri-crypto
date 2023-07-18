import React,{useState} from 'react';


interface props {
  symbol: string,
  name: string,
  image: string,
  price: number,
  market_cap:number | undefined,
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


const CoinListItem: React.FC<props> = (props) => {

  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  const formattedMarketCap = props.market_cap?.toLocaleString('en-US', { useGrouping: true });

  const calculatePriceChangeStyle = (priceChangePercentage24h: number | undefined): React.CSSProperties => {
    const style: React.CSSProperties = {
      color: priceChangePercentage24h && priceChangePercentage24h < 0 ? 'red' : 'green',
    };
    return style;
  };
  

  return (
    <div className="coin-container">
      <section className='coin-list-item'>
        <img src={props.image} alt='coin-img' className='item-img'/>
        <p className='item-rank'>{props.market_cap_rank}</p>
        <p className='item-name'>{props.name}</p>
        <p className='item-symbol'>{props.symbol?.toUpperCase()}</p>
        <p className='item-price'>${props.price}</p>
        <p style={calculatePriceChangeStyle(props.price_change_percentage_24h)} className='item-24h-change'>{props.price_change_percentage_24h?.toFixed(1)}%</p>
        <p className='item-market-cap'>${formattedMarketCap}</p>
        <button className='more-details-button' onClick={toggleDetails}>
          {expanded ? 'Hide Details' : 'More Details'}
        </button>
      </section>
      <section className={`coin-details ${expanded ? 'expanded' : ''}`}>
        <div className='one-detail'>
          <label>24 Hour Low: </label>
          <p>{props.low_24h}</p>
        </div>
        <div className='one-detail'>
          <label>24 Hour High: </label>
          <p>{props.high_24h}</p>
        </div>
        <div className='one-detail'>
          <label>Total Volume: </label>
          <p>{props.total_volume}</p>
        </div>
        <div className='one-detail'>
          <label>Last Updated: </label>
          <p>{props.last_updated}</p>
        </div>
        <div  className='one-detail'>
          <label>Price Change 24h: </label>
          <p style={calculatePriceChangeStyle(props.price_change_24h)}>{props.price_change_24h}</p>
        </div>
        <div className='one-detail'>
          <label>Price Change Percentage 24h: </label>
          <p style={calculatePriceChangeStyle(props.price_change_percentage_24h)}>{props.price_change_percentage_24h?.toFixed(1)}%</p>
        </div>
        <div className='one-detail'>
          <label>Marketcap Change 24h: </label>
          <p style={calculatePriceChangeStyle(props.market_cap_change_24h)}>{props.market_cap_change_24h}</p>
        </div>
        <div className='one-detail'>
          <label>Marketcap Change Percentage 24h: </label>
          <p style={calculatePriceChangeStyle(props.market_cap_change_percentage_24h)}>{props.market_cap_change_percentage_24h?.toFixed(1)}%</p>
        </div>
        
      </section>
    </div>
  );
}
export default CoinListItem;

// {"id":"bitcoin",
// "symbol":"btc",
// "name":"Bitcoin",
// "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
// "current_price":29800,
// "market_cap":579947868539,
// "market_cap_rank":1,
// "fully_diluted_valuation":626720432208,
// "total_volume":13795472067,
// "high_24h":30291,
// "low_24h":29793,
// "price_change_24h":-336.2402888366523,
// "price_change_percentage_24h":-1.11572,
// "market_cap_change_24h":-4792240112.916992,
// "market_cap_change_percentage_24h":-0.81955,
// "circulating_supply":19432756.0,
// "total_supply":21000000.0,
// "max_supply":21000000.0,
// "ath":69045,
// "ath_change_percentage":-56.77612,
// "ath_date":"2021-11-10T14:24:11.849Z",
// "atl":67.81,
// "atl_change_percentage":43911.60628,
// "atl_date":"2013-07-06T00:00:00.000Z",
// "roi":null,
// "last_updated":"2023-07-18T12:46:51.380Z"}