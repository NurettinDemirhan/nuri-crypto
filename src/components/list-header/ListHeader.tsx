import React from 'react';
import "./ListHeader.css"


 const ListHeader: React.FC = () => {
  return (
    <div className='list-header-container'>
        <div className="list-header">
            <p className='start'></p>
            <p className='name'>Name</p>
            <p className='symbol'>Symbol</p>
            <p className='price'>Price</p>
            <p className='change'>24h</p>
            <p className='market-cap'>Market Cap</p>
            <p className='end'></p>
        </div>
    </div>
  );
}
export default ListHeader;