import axios from "axios"
import { useEffect, useState } from "react"
import { StyledCard, StyledItem } from "./styles"

const PeopleCard = ({ name, gender, birth_year, homeworld, starships }) => {
  const [planet, setPlanet] = useState("")
  const [starshipsData, setStarships] = useState([])

  const getPlanetName = async (url) => {
    await axios.get(url).then((res) => setPlanet(res.data.name))
  }

  const getStrships = async (arrayUrl) => {
    if (arrayUrl.length !== 0) {
      for (const url of arrayUrl) {
        await axios
          .get(url)
          .then((res) => setStarships((prev) => [...prev, res.data.name]))
      }
    } else {
      setStarships("Not a pilot")
    }
  }

  useEffect(() => {
    getPlanetName(homeworld)
    getStrships(starships)
  }, [homeworld, starships])

  return (
    <StyledCard>
      <StyledItem title={"true"}>{name}</StyledItem>
      <StyledItem>Gender: {gender}</StyledItem>
      <StyledItem>Birth Year: {birth_year}</StyledItem>
      <StyledItem>Home Planet: {planet}</StyledItem>
      <div>
        <StyledItem>Pilot of Starship: </StyledItem>
        {typeof starshipsData === "string" ? (
          <StyledItem>{starshipsData}</StyledItem>
        ) : (
          starshipsData.map((item) => (
            <StyledItem key={item}>{item}</StyledItem>
          ))
        )}
      </div>
    </StyledCard>
  )
}

export default PeopleCard
