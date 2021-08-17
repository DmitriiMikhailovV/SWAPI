import {
  StyledContainer,
  StyledSortWindow,
  StyledSortConditions,
  StyledItem,
  StyledCheckbox,
} from "./styles"

const FilterContainer = ({ onChange, isChecked }) => (
  <StyledContainer>
    <StyledSortWindow opacity={"true"} />
    <StyledSortConditions>
      <StyledItem>Not a Pilot</StyledItem>
      <StyledCheckbox type="checkbox" checked={isChecked} onChange={onChange} />
    </StyledSortConditions>
  </StyledContainer>
)

export default FilterContainer
