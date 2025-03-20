import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store?.chat?.messages);
  useEffect(() => {
    const id = setInterval(() => {
      // api polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: "lorem ipsum dolor🚀",
        })
      );
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-gray-50 rounded-lg overflow-y-auto flex flex-col-reverse">
        {chatMessage?.map((chatMessage, i) => {
          return (
            <ChatMessage
              key={i}
              name={chatMessage?.name}
              message={chatMessage?.message}
            />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Prince",
            message: liveMessage
          }))
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          className="w-full px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};
export default LiveChat;
