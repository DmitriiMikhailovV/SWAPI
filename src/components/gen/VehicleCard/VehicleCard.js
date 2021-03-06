import { forwardRef } from "react"
import { StyledCard, StyledItem } from "./styles"

const VehicleCard = forwardRef(
  (
    { name, manufacturer, model, crew, cargo_capacity, cost_in_credits },
    ref
  ) => (
    <StyledCard ref={ref}>
      <StyledItem title={"true"}>{name}</StyledItem>
      <StyledItem>Manufacturer: {manufacturer}</StyledItem>
      <StyledItem>Model: {model}</StyledItem>
      <StyledItem>Crew: {crew}</StyledItem>
      <StyledItem>Cargo capacity: {cargo_capacity}</StyledItem>
      <StyledItem>Cost in credits: {cost_in_credits}</StyledItem>
    </StyledCard>
  )
)

export default VehicleCard
