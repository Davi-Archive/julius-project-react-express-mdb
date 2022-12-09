import {Header, NavbarHeader,NavbarTop} from '../..'

const HeaderContainer = () => {
  const navbarTop = [
    { text: "Home", link: "#home" },
    { text: "Home2", link: "#home" },
    { text: "Home3", link: "#home" },
  ];
  const navbarBellowHeader = [
    { text: "Home", link: "#home" },
    { text: "Home2", link: "#home" },
  ];

  return (
    <>
      <NavbarTop expand="lg" list={navbarTop} />
      <Header />
      <NavbarHeader />
    </>
  );
};

export default HeaderContainer;
