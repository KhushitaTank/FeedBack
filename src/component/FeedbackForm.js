import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisable, setbtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    if (text === "") {
      setbtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisable(true);
      setMessage("Text must be aleast 10 charater");
    } else {
      setMessage(null);
      setbtnDisable(false);
    }
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>how would you rate our services</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisable={btnDisable}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
