import Card from "./shared/Card";
const FeedbackItem = ({ item }) => {
  return (
    <Card value="Hello">
      <div>{item.rating}</div>
      <div>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
