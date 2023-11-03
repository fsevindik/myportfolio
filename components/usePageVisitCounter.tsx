import { useEffect, useState } from "react";

export function usePageVisitCounter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    setVisitCount(visitCount + 1);
  }, []);

  return visitCount;
}
