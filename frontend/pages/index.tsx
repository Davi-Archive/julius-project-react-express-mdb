import { Footer, Header, Navbar } from "../shared";

export default function Home() {
  return (
    <div>
      <Navbar expand="xxl" />
      <Header />
      <Navbar expand={true} />
      <Footer />
    </div>
  );
}
