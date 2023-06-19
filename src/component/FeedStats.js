function FeedStats({ feedback }) {
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;
  /*console.log("average", average / feedback.length);
  console.log("fix", (average / feedback.length).toFixed(1));
  console.log(
    "replace ",
    (average / feedback.length).toFixed(1).replace(/[.,]0$/, "")
  );*/

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Review</h4>
      <h4>Average rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedStats;
