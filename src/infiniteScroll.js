import { useState, useEffect } from "react";

export default function useInfiniteScroll(fetchData, targetDOM) {
  const [loading, setLoading] = useState(false);
  const scrollThreshold = 300;

  useState(() => {
    let isMount = true;

    function handleScroll() {
      if (
        (targetDOM?.lastElementChild?.getBoundingClientRect().bottom ??
          targetDOM?.getBoundingClientRect().bottom) <=
          targetDOM?.clientHeight + scrollThreshold &&
        !loading
      ) {
        setLoading(true);
      }
      console.log("handleScroll event fired");
    }

    window.addEventListener("scroll", handleScroll);

    if (loading) {
      fetchData().then(() => {
        if (isMount) {
          setLoading(false);
        }
      });
    }

    return () => {
      isMount = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, fetchData]);

  return loading;
}
