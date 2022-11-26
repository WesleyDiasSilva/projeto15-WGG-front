import axios from "axios";
import React, { useContext, useEffect } from "react";
import { API } from "../API";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { ContextUser } from "../contexts/ContextUser";
import styled from "styled-components";

function HomePage() {
  const [searchFilter, setSearchFilter] = React.useState("");
  const [games, setGames] = React.useState([]);
  const [rating, setRating] = React.useState();
  const [onlyAvailable, setOnlyAvailable] = React.useState(false)

  const user = useContext(ContextUser);
  const token = user.user.token;

  let gamesFiltredInSearchBar;
  if(searchFilter){
    gamesFiltredInSearchBar = games.filter(game => game.name.includes(searchFilter))
  }

  let gamesFiltredInRating;
  if(rating){
    gamesFiltredInRating = games.filter((game) => {
      return (game.rating.toFixed(0)) == (rating)
    })
  }

  let gamesAvailable;
  if(onlyAvailable){
    gamesAvailable = games.filter(game => game.stock > 0)
  }
  console.log(gamesAvailable)


  useEffect(() => {
    const gamesResponse = axios.get(`${API}/games`, {
      headers: { authorization: token },
    });
    gamesResponse.then((data) => setGames(data.data));
    gamesResponse.catch(err => console.log(err))
  }, []);

  return (
    <>
    <Homebox>

      <Sidebar setOnlyAvailable={setOnlyAvailable} setRating={setRating}/>
      <Navbar value={searchFilter} setValue={setSearchFilter} />
      <ProductsBox>
      
      </ProductsBox>
    </Homebox>
    </>
  );
}

export default HomePage;

const Homebox = styled.div`
  display: flex;
  `
const ProductsBox = styled.div`
  margin-top: 80px;
  padding: 5%;
`