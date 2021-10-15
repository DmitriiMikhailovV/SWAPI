import { forwardRef } from "react"
import { StyledCard, StyledItem } from "./styles"

const PeopleCard = forwardRef(
  ({ name, gender, birth_year, homeworld, starships }, ref) => {
    return (
      <StyledCard ref={ref}>
        <StyledItem title={"true"}>{name}</StyledItem>
        <StyledItem>Gender: {gender}</StyledItem>
        <StyledItem>Birth Year: {birth_year}</StyledItem>
        <StyledItem>Home Planet: {homeworld}</StyledItem>
        <div>
          <StyledItem>Pilot of Starship: </StyledItem>
          {starships.map((item, index) => (
            <StyledItem key={index}>
              {index + 1}: {item}
            </StyledItem>
          ))}
        </div>
      </StyledCard>
    )
  }
)

export default PeopleCard
