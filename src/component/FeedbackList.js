import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback);

  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}></FeedbackItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
}

//return (
//  <div className="feedback-list">
//    {feedback.map((item) => (
//      <FeedbackItem
//        key={item.id}
//        item={item}
//        handleDelete={handleDelete}></FeedbackItem>
//    ))}
//  </div>
//);
//}

export default FeedbackList;
