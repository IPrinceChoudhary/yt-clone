const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <p className="font-bold p-2">{name}</p>
      <p>{message}</p>
    </div>
  );
};
export default ChatMessage;
