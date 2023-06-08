import axios from "axios";
import React from 'react'
const API_KEY="14f06887569c5447ea4dec41bc18736e"
const API_URL="http://api.openweathermap.org/data/2.5/weather"

export const getWeather=async (city,country)=>{
    try{
       let response= await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
       return response.data;

    } catch(error){
        console.log("Error while calling the api",error);
        return error.response
    }
}