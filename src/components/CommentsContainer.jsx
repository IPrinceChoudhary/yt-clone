import { commentsData } from "../utils/constants";
import UserComment from "./UserComment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <UserComment data={comment} />
        <div className="pl-5 border-l-2 border-l-black ml-5">
          {comment.replies && comment.replies.length > 0 && (
            <CommentList comments={comment.replies} />
          )}
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
