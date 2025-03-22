import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Routes, Route } from "react-router";
import WatchPage from "./WatchPage";
import NotFound from "./NotFound";
import Demo from "./Demo";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route index element={<MainContainer />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/demo" element={<Demo />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default Body;
