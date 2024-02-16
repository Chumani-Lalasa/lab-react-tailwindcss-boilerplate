import React from 'react';

const Card = () => {
  return (
    <div className='w-2/6 border h-[150px] border-gray-100 flex justify-evenly items-center gap-5 rounded' style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"}}>
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="card-img" />
      <div>
        <h3 className='text-xl'>Kalvium Store</h3>
        <p className='text-gray-600'>You have a new course</p>
      </div>
    </div>
  );
}

export default Card;