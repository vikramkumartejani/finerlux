import Footer from "./components/Footer";
import NewArrivals from "./components/NewArrivals";
import Tab from "./components/Tab";
import WithUsYouCan from "./components/WithUsYouCan";

export default function Home() {
  return (
    <div>
      <NewArrivals/>
      {/* <WithUsYouCan/> */}
      <Tab />
    </div>
  );
}
