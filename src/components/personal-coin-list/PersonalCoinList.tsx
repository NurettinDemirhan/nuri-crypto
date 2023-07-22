import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ListHeader from '../list-header/ListHeader';
import CoinListItem from '../coin-list/coin-list-item/CoinListItem';
import './PersonalCoinList.css'

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
  market_cap_rank:number
}

 const PersonalCoinList: React.FC = () => {

  const [personalList, setPersonalList] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [dropdownData, setDropdownData] = useState([])
  //useState function for the searchbar
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event?.target.value);
  };

  //when you search
  const onSearch = (searchTerm: string) => {
    setSearchValue(e => searchTerm);
    console.log("search ", searchTerm);
  
    let newData: props | null = null; // Initialize newData as null
    searchTerm = searchTerm.toLowerCase()
    dropdownData.forEach((item: props) => {
      if (item.name.toLowerCase() === searchTerm) {
        newData = item;
      }
    });
  
    console.log(newData);
  
    if (newData && !personalList.some((item:props) => item.name === newData!.name)) {
      personalList.push(newData);
      setSearchValue("")
    }
  };

  async function fetchingData() {
    try {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en");
      setDropdownData(response.data);
      console.log(response.data, "data fetched for personal list");
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchingData(); 
  }, []);

  const handleDelete = (marketCapRank: number) => {
    // Implement your delete logic here, e.g., send a request to the server to delete the item with the given marketCapRank.
    // For this example, let's just update the state and remove the item from the list.
    setPersonalList((prevData) => prevData.filter((item:props) => item.market_cap_rank !== marketCapRank));
  };
  const coinList: JSX.Element[] = personalList.map((item:props) => (
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
      asd={true}
      onClickDelete={() => handleDelete(item.market_cap_rank)}
    />
  ));

  return (
    <div className='personal-coin-list-container'>
      <h1>Search the top 100 coins to add to your view </h1>
        <div className='searchbar-container'>
          

          <div className='search-inner'>
              <input type='text' value={searchValue} onChange={changeValue}/>
              <button onClick={() =>onSearch(searchValue)}>Search</button>
          </div>

          <div className='dropdown'>
            {dropdownData
            .filter((item:props)=>{
              const searchTerm: string = searchValue.toLowerCase();
              const fullName: string = item.name.toLowerCase();

              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm
            })
            .slice(0,6)
            .map((item:props)=> (
            <div 
            onClick={()=>onSearch(item.name)} 
             
            className='dropdown-row'
            key={item.market_cap_rank}
            >

              {item.name}

            </div>
            ))}
          </div>

        </div>
        <ListHeader/>
        {coinList}
    </div>
  );
}
export default PersonalCoinList;