import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Some context feedback item",
      rating: 9,
    },
    {
      id: 2,
      text: "Second context feedback item",
      rating: 3,
    },
    {
      id: 3,
      text: "Third context feedback item",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //   set item to edit here...

  const editFeedback = (item) => {
    // console.log(item);
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete the feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);

    // console.log("Add feedback here");
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
