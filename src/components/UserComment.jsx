const UserComment = ({data}) => {
  const {name, comment} = data

  return (
    <div className="flex-col bg-gray-100 p-2 rounded-lg mt-3">
      <img className="w-12 h-12" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="comment image " />
      <div className="px-3">
        <p className="font-bold capitalize">{name}</p>
        <p className="font-medium">{comment}</p>
      </div>
    </div>
  )
}
export default UserComment