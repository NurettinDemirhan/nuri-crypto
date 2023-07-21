import React from 'react';
import "./Title.css"


 const Title: React.FC = () => {
  return (
    <div className="title">
      <div className='title-inner'>
        <h1>Welcome to the Crypto Tracker</h1>
        <h2>You can view the top 10 currencies at the moment</h2>
        <h2>Also can search currencies and track them</h2>
      </div>
    </div>
  );
}
export default Title;
