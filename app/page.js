import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrivals";
import Tab from "./components/Tab";
import WithUsYouCan from "./components/WithUsYouCan";

export default function Home() {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <WithUsYouCan/>
      <Tab />
    </div>
  );
}
