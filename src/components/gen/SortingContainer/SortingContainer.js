import {
  StyledContainer,
  StyledSortWindow,
  StyledSortConditions,
  StyledSelect,
  StyledOption,
  StyledItem,
} from "./styles"

const SortingContainer = ({ onChange, arrayForSorting }) => {
  const array = arrayForSorting.map((item) => (
    <StyledOption key={item.name} value={item.value}>
      {item.name}
    </StyledOption>
  ))

  return (
    <StyledContainer>
      <StyledSortWindow opacity={"true"} />
      <StyledSortConditions>
        <StyledItem>Sort by</StyledItem>
        <StyledSelect onChange={onChange}>{array}</StyledSelect>
      </StyledSortConditions>
    </StyledContainer>
  )
}

export default SortingContainer
