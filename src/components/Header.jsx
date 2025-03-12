import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"


const Header = () => {
  const dispatch = useDispatch();

  function toggleHamHandler(){
    dispatch(toggleMenu())
  }

  return (
    <header className="grid p-5 shadow-md text-center content-center place-items-center grid-cols-5">
      <section className="grid grid-flow-col place-items-center col-span-1 justify-self-start">
        <img className="h-10 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="hamburger" onClick={()=>toggleHamHandler()}/>
        <img className="h-14" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtube logo"/>
      </section>
      <section className="col-span-3 grid grid-flow-col items-center">
        <input className="border w-md h-10 px-2 outline-none rounded-l-full" type="text" placeholder="Search" />
        <button className="border h-10 px-5 rounded-r-full bg-gray-200 cursor-pointer">🔍</button>
      </section>
      <section className="place-items-center col-span-1">
        <img className="h-10" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user icon" />
      </section>
    </header>
  )
}
export default Header