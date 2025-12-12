import axios from "axios"
import config from "./config";


export const getAllHotels = async () =>{
    const response =  await axios.get(`${config.BASE_URL}/hotel`,{
  
    });
    // console.log(response.data);
    return response.data;
}

export const hotelRegistration = async (hotelData) =>{
    const response =  await axios.post(`${config.BASE_URL}/hotel/register`,hotelData,{
   headers: { "Content-Type": "application/json" },
    });
    // console.log(response.data);
    return response.data;
}


export const hotelUpdate = async (hotelId, hotelData) => {
  const response = await axios.put(
    `${config.BASE_URL}/hotel/hotelEdit?id=${hotelId}`,
    hotelData,
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data;
};


export const getHotelById = async (hotelId) => {
  const response = await axios.get(
    `${config.BASE_URL}/hotel/getbyId?id=${hotelId}`
  );

  return response.data;
};
