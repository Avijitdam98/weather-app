import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import Sunset from "../assets/Images/bg.jpg";
import Form from "../Components/Form";
import Infromation from "../Components/Infromation";

const HomeContainer = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  width: "65%",
});

const Image = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
}));

const Home = () => {
  const[result,setResult]=useState({})
  return (
    <HomeContainer>
      <Image />
      <Box style={{width:'73%',height:'80%'}}>
        <Form setResult={setResult}/>
        <Infromation result={result}/>
      </Box>
    </HomeContainer>
  );
};

export default Home;
