import React, {useState, useEffect} from "react";

//configuration
import { API_URL, API_KEY, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components

//hooks
//image
import NoImage from "../images/no_image.jpg";

const Home = () => {

    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  return (
    <div>
      home
    </div>
  );
};

export default Home;
