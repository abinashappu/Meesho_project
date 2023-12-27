import Nav from "./nav";
import "./dashboard.css";
import Nav2 from "./nav2";
import Banner from "./banner";
import Banner2 from "./banner2";
import Title from "./title2";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <div className="row-1">
        <Nav />
        <Nav2 />
      </div>
      <div className="row-2">
        <Banner />
      </div>
      <div className="row-3">
        <Banner2 />
      </div>
      <Title />
      <div className="main">
        <Sidebar />
      </div>
    </div>
  );
}
export default Dashboard;
