import { StyledContainer, StyledWindow, StyledLink } from "./styles"
import img from "../../../images/Star-Destroyer-Wallpaper-4k-scaled.jpg"

const CentralWindow = ({ links }) => (
  <StyledContainer url={img}>
    <StyledWindow />
    {links.map(({ title, path }) => (
      <StyledLink key={title} to={path}>
        {title}
      </StyledLink>
    ))}
  </StyledContainer>
)

export default CentralWindow
