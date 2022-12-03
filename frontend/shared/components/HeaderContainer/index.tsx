import { Navbar, Header } from "../..";

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
      <Navbar expand="lg" list={navbarTop} />
      <Header />
      <Navbar expand={true} list={navbarBellowHeader} />
    </>
  );
};

export default HeaderContainer;
