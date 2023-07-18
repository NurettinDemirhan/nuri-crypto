const axios = require("axios");

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"

const getAll = async (req,res) =>{
    const coinData = await axios.get(url)
    .then(response => {
        const data = response.data;
        return data
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    res.status(200).json(coinData);
}