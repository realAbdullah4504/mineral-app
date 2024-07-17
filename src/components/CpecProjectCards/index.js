import React from 'react';

export const CpecCards = ({ item, index }) => {
  return (
    <div className='cpec-project-card'>
      {index % 2 === 1 && (
        <img src={item.img} alt="Project" />
      )}
      <div className='cpec-project-card-details' style={{ height: '80%' }}>
        {item.title}
        <div>{item.projectCompleted}</div>
        <div>Current Status: <span>{item.currStatus}</span></div>
      </div>
      {index % 2 === 0 && (
        <img src={item.img} alt="Project" />
      )}
    </div>
  );
};

export default CpecCards;
