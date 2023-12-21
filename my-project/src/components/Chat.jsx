import Comment from "./Comment";
import data from "../../que.json";
const Chat = () => {
  const questions = data.questions;

  const sortedQuestions = [...questions].sort((a, b) => b.upvotes - a.upvotes);

  const top3elements = sortedQuestions
    .slice(0, 3)
    .map((item) => (
      <Comment
        key={item.id}
        text={item.text}
        upvotes={item.upvotes}
        downvotes={item.downvotes}
        user={item.user}
      />
    ));

  const top10elements = sortedQuestions
    .slice(0, 10)
    .map((item) => (
      <Comment
        key={item.id}
        text={item.text}
        upvotes={item.upvotes}
        downvotes={item.downvotes}
        user={item.user}
      />
    ));

  const elements = questions.map((item) => (
    <Comment
      key={item.id} // Adding a key is essential when mapping over an array in React
      text={item.text}
      upvotes={item.upvotes}
      downvotes={item.downvotes}
      user={item.user}
    />
  ));
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex flex-wrap">
      <div className="w-[450px] relative h-[700px] mx-3">
        <div className=" m-4 w-[450px] h-[600px] bg-[#111827] text-white p-2 rounded-md overflow-scroll">
          <h1 className="text-center">QnA</h1>
          {elements}
        </div>
        <input
          type="text"
          name="input"
          className="w-full rounded-md mx-2 p-1 text-lg absolute bottom-2"
        />
      </div>
      <div className="m-4 w-[450px] h-[600px] bg-[#111827] p-2 rounded-md relative text-white">
        <h1 className="text-center">Top 3 Ques</h1>
        {top3elements}
      </div>
      <div className="m-4 w-[450px] h-[600px] bg-[#111827] p-2 rounded-md relative overflow-scroll text-white">
        <h1 className="text-center">Top 10 Ques</h1>
        {top10elements}
      </div>
    </div>
  );
};

export default Chat;
