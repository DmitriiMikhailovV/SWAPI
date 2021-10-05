import PageTitle from "../../gen/PageTitle/PageTitle"
import SortingContainer from "../../gen/SortingContainer/SortingContainer"
import img from "../../../images/Star-Destroyer-Wallpaper-4k-scaled.jpg"
import { useEffect, useState } from "react"
import { StyledFlex, StyledContainer } from "./styles"
import VehicleCard from "../../gen/VehicleCard/VehicleCard"
import Loading from "../../gen/Loading/Loading"

const Vehicles = () => {
  const [next, setNext] = useState("https://swapi.dev/api/vehicles")
  const [vehicles, setVehicles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortCondition, setSortCondition] = useState("none")

  const fetchData = () => {
    if (next) {
      console.log("fetch")
      setIsLoading(true)
      fetch(next)
        .then((res) => res.json())
        .then((result) => {
          setVehicles([...vehicles, ...result.results])
          setNext(result.next)
          setIsLoading(false)
        })
    }
  }

  const arrayForSorting = [
    { name: "Without sorting", value: "none" },
    { name: "Crew: Low to High", value: "crew_up" },
    { name: "Crew: High to Low", value: "crew_down" },
    { name: "Cargo Capacity: Low to High", value: "cargo_up" },
    { name: "Cargo Capacity: High to Low", value: "cargo_down" },
    { name: "Cost in credits: Low to High", value: "cost_up" },
    { name: "Cost in credits: High to Low", value: "cost_down" },
  ]

  const sortData = (type) => {
    const types = {
      none: "",
      crew_up: "crew",
      crew_down: "crew",
      cargo_up: "cargo_capacity",
      cargo_down: "cargo_capacity",
      cost_up: "cost_in_credits",
      cost_down: "cost_in_credits",
    }
    const sortProp = types[type]
    if (type.includes("down")) {
      const sortedData = [...vehicles].sort((a, b) => b[sortProp] - a[sortProp])
      setVehicles(sortedData)
    } else {
      const sortedData = [...vehicles].sort((a, b) => a[sortProp] - b[sortProp])
      setVehicles(sortedData)
    }
  }

  const arrayOfVehicle = () => {
    if (vehicles) {
      return vehicles.map((item, index) => (
        <VehicleCard
          key={index}
          name={item.name}
          manufacturer={item.manufacturer}
          model={item.model}
          crew={item.crew}
          cargo_capacity={item.cargo_capacity}
          cost_in_credits={item.cost_in_credits}
        />
      ))
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    sortData(sortCondition)
  }, [sortCondition])

  return (
    <StyledContainer url={img}>
      <Loading loading={isLoading} />
      <button
        onClick={(e) => {
          console.log("click fetch data")
          fetchData()
        }}
      >
        NEXT
      </button>
      <PageTitle title={"VEHICLES"} />
      <SortingContainer
        onChange={(e) => setSortCondition(e.target.value)}
        arrayForSorting={arrayForSorting}
      />
      <StyledFlex>{arrayOfVehicle()}</StyledFlex>
    </StyledContainer>
  )
}

export default Vehicles
