import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import { Routes, Route } from "react-router"
import WatchPage from "./WatchPage"
import NotFound from "./NotFound";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Routes>
        <Route index element={<MainContainer/>}/>
        <Route path="/watch" element={<WatchPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default Body