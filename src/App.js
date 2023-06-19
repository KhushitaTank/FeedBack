import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackItem from "./component/FeedbackItem";
import FeedbackList from "./component/FeedbackList";
import FeedStats from "./component/FeedStats";
import Header from "./component/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };
  const [feedback, setFeedback] = useState(FeedbackData);
  const deletFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deletFeedback} />
      </div>
    </>
  );
}

export default App;
