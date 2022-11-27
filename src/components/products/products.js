import { API } from "../API";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

export default function Products(){

    const [games, setGames] = useState([]);
    useEffect(() => {
        const get = axios.get(`${API}/games`, {
          headers: { authorization: token },
        });
        get.then((data) => setGames(data.data));
        get.catch(err => console.log(err))
      }, []);
console.log(games)
    return(
        <>

        </>
    )
}