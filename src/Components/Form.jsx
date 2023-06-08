import React, { useState } from "react";
import { Box, InputBase, Button } from "@mui/material";
import styled from "@emotion/styled";
import { getWeather } from "../services/api";

const StyledContainer = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const StyledInput = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
});

const Form = ({setResult}) => {
  const [formData, setFormData] = useState({ city: "", country: "" });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const getWeatherInfo = async () => {
    let response = await getWeather(formData.city, formData.country);
    setResult(response)
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); 
  }

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <StyledInput
          placeholder="City"
          onChange={handleInputChange}
          name="city"
          value={formData.city}
        />
        <StyledInput
          placeholder="Country"
          onChange={handleInputChange}
          name="country"
          value={formData.country}
        />
        <GetButton type="submit" variant="contained" onClick={getWeatherInfo}>
          Get Weather
        </GetButton>
      </form>
    </StyledContainer>
  );
};

export default Form;
