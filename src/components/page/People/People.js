import PageTitle from "../../gen/PageTitle/PageTitle"
import FilterContainer from "../../gen/FilterContainer/FilterContainer"
import Loading from "../../gen/Loading/Loading"
import img from "../../../images/Star-Destroyer-Wallpaper-4k-scaled.jpg"
import { useEffect, useState, useCallback, createRef } from "react"
import { StyledContainer, StyledFlex } from "./styles"
import PeopleCard from "../../gen/PeopleCard/PeopleCard"

const People = () => {
  const [next, setNext] = useState("https://swapi.dev/api/people")
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [filterPeople, setFilterPeople] = useState([])

  const ref = createRef()
  const lastItemRef = useCallback(
    (node) => {
      if (isLoading) return
      if (ref.current) ref.current.disconnect()
      ref.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchData()
        }
      })
      if (node) ref.current.observe(node)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading]
  )

  const fetchData = async () => {
    if (next) {
      setIsLoading(true)
      let res = await fetch(next)
      let data = await res.json()
      await Promise.all(
        data.results.map(async (item) => {
          const resPlanet = await fetch(item.homeworld)
          const dataPlanet = await resPlanet.json()
          item.homeworld = dataPlanet.name
          const arr = await Promise.all(
            item.starships.map(async (item) => {
              const resStarship = await fetch(item)
              const dataStarship = await resStarship.json()
              return (item = dataStarship.name)
            })
          )
          item.starships = arr
        })
      )
      setPeople((prevPeople) => {
        return [...new Set([...prevPeople, ...data.results])]
      })
      setNext(data.next)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("fetch")
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const arrayOfPeoples = isChecked
    ? filterPeople
        .filter((item) => item.starships.length === 0)
        .map((item, index) => {
          if (people.length === index + 1) {
            return (
              <PeopleCard
                ref={lastItemRef}
                key={item.name}
                name={item.name}
                gender={item.gender}
                birth_year={item.birth_year}
                homeworld={item.homeworld}
                starships={item.starships}
              />
            )
          } else {
            return (
              <PeopleCard
                key={item.name}
                name={item.name}
                gender={item.gender}
                birth_year={item.birth_year}
                homeworld={item.homeworld}
                starships={item.starships}
              />
            )
          }
        })
    : people.map((item, index) => {
        if (people.length === index + 1) {
          return (
            <PeopleCard
              ref={lastItemRef}
              key={item.name}
              name={item.name}
              gender={item.gender}
              birth_year={item.birth_year}
              homeworld={item.homeworld}
              starships={item.starships}
            />
          )
        } else {
          return (
            <PeopleCard
              key={item.name}
              name={item.name}
              gender={item.gender}
              birth_year={item.birth_year}
              homeworld={item.homeworld}
              starships={item.starships}
            />
          )
        }
      })

  return (
    <StyledContainer url={img}>
      <Loading loading={isLoading} />
      <PageTitle title={"PEOPLE"} />
      <FilterContainer
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(!isChecked)
          setFilterPeople([...filterPeople, ...people])
        }}
      />
      <StyledFlex>{arrayOfPeoples}</StyledFlex>
    </StyledContainer>
  )
}

export default People
