import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;
  return (
    <aside className="shadow-lg p-5 grid grid-flow-row gap-4 h-full">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <div>
        <h2 className="font-bold">Subscriptions</h2>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold">Watch later</h2>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
