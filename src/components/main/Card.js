import React from 'react';

const Card = ({ title, desc, image, date }) => {


    return (

        <>

            {/* 
            {date.includes("February") && (<div className='cards'>
                <div className='title'>
                    <h1>{title}</h1>
                </div>
                <div className='date'>
                    <h1>{date}</h1>
                </div>
                <img src={image} alt="" />
                <div className='desc'>
                    <p>{desc}</p>
                </div>
            </div>)} */}  İçinde sadece February olanları goster dersem,bu kod ile yazılır.

        </>


    );
};

export default Card;
