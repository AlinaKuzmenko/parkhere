import StyledHeader from './styled';


function Header() {
  return (
    <StyledHeader>
      <a href="/">
        <img src="/logo.svg" alt="ParkHere logo" />
      </a>
    </StyledHeader>
  );
}

export default Header;
