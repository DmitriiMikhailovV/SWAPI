import PageTitle from "../../gen/PageTitle/PageTitle"
import FilterContainer from "../../gen/FilterContainer/FilterContainer"
import WaitDownloading from "../../gen/WaitDownloading/WaitDownloading"
import img from "../../../images/Star-Destroyer-Wallpaper-4k-scaled.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { StyledContainer, StyledFlex } from "./styles"
import PeopleCard from "../../gen/PeopleCard/PeopleCard"

const People = () => {
  const [next, setNext] = useState(null)
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const fetchData = async (url) => {
    await axios.get(url).then((res) => {
      let resArray = res.data.results
      setData((prevState) => [...prevState, ...resArray])
      setNext(res.data.next)
    })
  }

  const getStartData = async () => {
    const url = "https://swapi.dev/api/people"
    await fetchData(url)
    setIsLoaded(true)
  }

  useEffect(() => {
    getStartData()
  }, [])

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("scroll bottom")
        if (typeof next === "string") {
          fetchData(next)
        } else {
        }
      }
    }
    window.addEventListener("scroll", handleScrollEvent)
    return () => {
      window.removeEventListener("scroll", handleScrollEvent)
    }
  }, [next])

  const arrayOfPeoples = isChecked
    ? data
        .filter((item) => item.starships.length === 0)
        .map((item) => (
          <PeopleCard
            key={item.name}
            name={item.name}
            gender={item.gender}
            birth_year={item.birth_year}
            homeworld={item.homeworld}
            starships={item.starships}
          />
        ))
    : data.map((item) => (
        <PeopleCard
          key={item.name}
          name={item.name}
          gender={item.gender}
          birth_year={item.birth_year}
          homeworld={item.homeworld}
          starships={item.starships}
        />
      ))

  return isLoaded === false ? (
    <WaitDownloading />
  ) : (
    <StyledContainer url={img}>
      <PageTitle title={"PEOPLE"} />
      <FilterContainer
        checked={isChecked}
        onChange={(e) => setIsChecked(!isChecked)}
      />
      <StyledFlex>{arrayOfPeoples}</StyledFlex>
    </StyledContainer>
  )
}

export default People
