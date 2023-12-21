import Comment from "./Comment";
import data from "../../que.json";
const Chat = () => {
  const questions = data.questions;
  const elements = questions.map((item) => {
    <Comment
      text={item.text}
      upvotes={item.upvotes}
      downvotes={item.downvotes}
      user={item.user}
    />;
  });
  console.log(questions);
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex flex-wrap">
      <div className=" m-4 w-[450px] h-[600px] bg-[#111827] p-2 rounded-md relative">
        {elements}
        <input
          type="text"
          name="input"
          className="w-5/6 rounded-md mx-2 p-1 text-lg absolute bottom-2"
        />
      </div>
      <div className="m-4 w-[450px] h-[600px] bg-[#111827] p-2 rounded-md relative text-white">
        <h1 className="text-center">Nothing here yet!!</h1>
      </div>
      <div className="m-4 w-[450px] h-[600px] bg-[#111827] p-2 rounded-md relative text-white">
        <h1 className="text-center">Nothing here yet!!</h1>
      </div>
    </div>
  );
};

export default Chat;
