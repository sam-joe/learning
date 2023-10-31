import BrandIcon from "../Icons/BrandIcon";
import { HeaderWrapper } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderWrapper loggedin={true}>
      <BrandIcon color={"light"} />
      <section>right</section>
    </HeaderWrapper>
  );
};

export default Header;
