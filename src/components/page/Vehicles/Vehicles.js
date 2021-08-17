import PageTitle from "../../gen/PageTitle/PageTitle"
import SortingContainer from "../../gen/SortingContainer/SortingContainer"
import WaitDownloading from "../../gen/WaitDownloading/WaitDownloading"
import img from "../../../images/Star-Destroyer-Wallpaper-4k-scaled.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { StyledFlex, StyledContainer } from "./styles"
import VehicleCard from "../../gen/VehicleCard/VehicleCard"

const Vehicles = () => {
  const [next, setNext] = useState(null)
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [sortCondition, setSortCondition] = useState("none")

  const fetchData = async (url) => {
    await axios.get(url).then((res) => {
      let resArray = res.data.results
      const resultArray = [...data, ...resArray]
      resultArray.forEach((item, i) => {
        item.id = i + 1
      })
      setData((prevState) => [...prevState, ...resArray])
      setNext(res.data.next)
    })
  }

  const getStartData = async () => {
    const url = "https://swapi.dev/api/vehicles"
    await fetchData(url)
    setIsLoaded(true)
  }

  useEffect(() => {
    getStartData()
    console.log("getStartData")
  }, [])

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("scroll bottom")
        if (typeof next === "string") {
          console.log("condition complite")
          fetchData(next)
        } else {
          console.log("end data")
        }
      }
    }
    window.addEventListener("scroll", handleScrollEvent)
    return () => {
      window.removeEventListener("scroll", handleScrollEvent)
    }
  }, [next])

  const arrayForSorting = [
    { name: "Without sorting", value: "none" },
    { name: "Crew: Low to High", value: "crew_up" },
    { name: "Crew: High to Low", value: "crew_down" },
    { name: "Cargo Capacity: Low to High", value: "cargo_up" },
    { name: "Cargo Capacity: High to Low", value: "cargo_down" },
    { name: "Cost in credits: Low to High", value: "cost_up" },
    { name: "Cost in credits: High to Low", value: "cost_down" },
  ]

  const arrayOfVehicle = data.map((item) => (
    <VehicleCard
      // id={}
      key={item.name}
      name={item.name}
      manufacturer={item.manufacturer}
      model={item.model}
      crew={item.crew}
      cargo_capacity={item.cargo_capacity}
      cost_in_credits={item.cost_in_credits}
    />
  ))

  useEffect(() => {
    switch (sortCondition) {
      case "none":
        const sorted1 = [...data].sort((a, b) => {
          return a.id - b.id
        })
        setData(sorted1)
        break
      case "crew_up":
        let sorted2 = data.sort((a, b) => (a.crew > b.crew ? 1 : -1))
        sorted2 = [...sorted2].sort((a, b) => (+a.crew > +b.crew ? 1 : -1))
        setData(sorted2)
        break
      case "crew_down":
        let sorted3 = data.sort((a, b) => (a.crew < b.crew ? 1 : -1))
        sorted3 = [...sorted3].sort((a, b) => (+a.crew < +b.crew ? 1 : -1))
        setData(sorted3)
        break
      case "cargo_up":
        let sorted4 = data.sort((a, b) =>
          a.cargo_capacity > b.cargo_capacity ? 1 : -1
        )
        sorted4 = [...sorted4].sort((a, b) =>
          +a.cargo_capacity > +b.cargo_capacity ? 1 : -1
        )
        setData(sorted4)
        break
      case "cargo_down":
        let sorted5 = data.sort((a, b) =>
          a.cargo_capacity < b.cargo_capacity ? 1 : -1
        )
        sorted5 = [...sorted5].sort((a, b) =>
          +a.cargo_capacity < +b.cargo_capacity ? 1 : -1
        )
        setData(sorted5)
        break
      case "cost_up":
        let sorted6 = data.sort((a, b) =>
          a.cost_in_credits > b.cost_in_credits ? 1 : -1
        )
        sorted6 = [...sorted6].sort((a, b) =>
          +a.cost_in_credits > +b.cost_in_credits ? 1 : -1
        )
        setData(sorted6)
        break
      case "cost_down":
        let sorted7 = data.sort((a, b) =>
          a.cost_in_credits < b.cost_in_credits ? 1 : -1
        )
        sorted7 = [...sorted7].sort((a, b) =>
          +a.cost_in_credits < +b.cost_in_credits ? 1 : -1
        )
        setData(sorted7)
        break
      default:
        const sorted8 = [...data].sort((a, b) => {
          return a.id - b.id
        })
        setData(sorted8)
    }
  }, [sortCondition])

  return isLoaded === false ? (
    <WaitDownloading />
  ) : (
    <StyledContainer url={img}>
      <PageTitle title={"VEHICLES"} />
      <SortingContainer
        onChange={(e) => setSortCondition(e.target.value)}
        arrayForSorting={arrayForSorting}
      />
      <StyledFlex>{arrayOfVehicle}</StyledFlex>
    </StyledContainer>
  )
}

export default Vehicles
