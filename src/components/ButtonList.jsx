import Button from "./Button"

const list = ["All", "Sports", "Cricket", "News", "Coding", "Guitar", "Food", "Songs", "Live", "College"]

const ButtonList = () => {
  return (
    <section className="mx-5 my-3 grid grid-flow-col gap-4">
      {list.map((item, index)=>{
        return (
          <Button name={item} key={index}/>
        )
      })}
    </section>
  )
}
export default ButtonList