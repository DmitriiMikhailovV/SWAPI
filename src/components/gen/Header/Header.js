import { StyledHeader, StyledLink } from "./styles"

const Header = ({ links }) => (
  <StyledHeader>
    {links.map(({ title, path }) => (
      <StyledLink key={title} to={path}>
        {title}
      </StyledLink>
    ))}
  </StyledHeader>
)

export default Header
