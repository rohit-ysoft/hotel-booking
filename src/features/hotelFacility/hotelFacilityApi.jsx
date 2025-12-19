import axios from 'axios';
import React from 'react'
import config from '../../api/config';

export const createHotelFacility = async (facilityData) => {

  // for (let [key, value] of facilityData.entries()) {
  //       console.log(key, value);
  //     }

  const response = await axios.post(`${config.BASE_URL}/hotelFacility/register`, facilityData, {
    headers: { "Content-Type": "multipart/form-data", },
  });
  return response.data;
}


export const getHotelFacilities = async (hotelId) => {
  const response = await axios.get(
    `${config.BASE_URL}/hotelFacility/hotel/${hotelId}`
  );
  return response.data;
};

