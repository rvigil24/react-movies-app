import React, { useState, useEffect } from "react";

//components

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  
  return <div>home</div>;
};

export default Home;
