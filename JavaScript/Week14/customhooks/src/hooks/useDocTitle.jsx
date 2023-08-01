import { useEffect, useState } from "react";

const useDocTitle = ({ title }) => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;
