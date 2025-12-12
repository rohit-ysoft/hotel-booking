import axios from 'axios';
import React from 'react'
import config from './config';

export const createHotelFacility = async (facilityData) =>{

     const response = await axios.post(`${config.BASE_URL}/hotelFacility/register`,facilityData,{
    headers: { "Content-Type": "application/json" },
     });
        return response.data;
}


export const getHotelFacilities = async (hotelId) => {
  const response = await axios.get(
    `${config.BASE_URL}/hotelFacility/hotel/${hotelId}`
  );
  return response.data;
};

