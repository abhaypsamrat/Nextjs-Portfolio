import About from "../component/About";
import Avatar from "../component/Avatar";
import Connect from "../component/Connect";
import Header from "../component/Header";
import Skill from "../component/Skill";
import Work from "../component/Work";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Avatar />
      <About />
      <Work />
      <Skill />
      <Connect />
      <Footer />
    </div>
  );
}
