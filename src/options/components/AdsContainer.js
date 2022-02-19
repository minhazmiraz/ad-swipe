import React from 'react';
import SingleAd from './SingleAd';

const AdsContainer = ({fbAds}) => {
    console.log(fbAds);
    return (
        <div className='ads-container'>
            {fbAds.map((ad=>{
                return <SingleAd ad={ad}/>
            }))}
        </div>
    );
}

export default AdsContainer;