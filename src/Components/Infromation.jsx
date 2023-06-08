import React from "react";
import { Box, Typography,styled } from "@mui/material";

const Row=styled(Typography)({
    padding:10,
    fontSize:20,
    letterSpacing:2,
    '&>svg':{
        marginRight:10
    }

})

const Error=styled(Typography)({
    color:'red',
    margin:50,
    padding:20

})
import {
  Brightness3,
  LocationOn,
  Opacity,
  SettingsBrightness,
  WbSunny,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{margin:'30px 60px',}}>
      <Row>
        <LocationOn /> {result.name}, {result.sys.country}
      </Row>
      <Row>
        <SettingsBrightness /> Temperature: {result.main.temp}
      </Row>
      <Row>
        <Opacity /> Humidity: {result.main.humidity}
      </Row>
      <Row>
        <WbSunny /> Sunrise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6 /> Sunset: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Dehaze /> Humidity: {result.weather[0].main}
      </Row>
      <Row>
        <Cloud />
        Clouds: {result.clouds.all}%
      </Row>
    </Box>
  ) :<Error>Please Enter The Values check Weather</Error>;
};

export default Information;
