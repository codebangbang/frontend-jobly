import { useRef, useState, useEffect } from "react";

function useTimedMessage(time = 3000) {
  const [active, setActive] = useState(false);
  const messageShownRef = useRef(false);

  useEffect(
    function showSavedMessage() {
      if (active && !messageShownRef.current) {
        messageShownRef.current = true;
        setTimeout(function removeMessage() {
          setActive(false);
          messageShownRef.current = false;
        }, time);
      }
    },
    [active, time]
  );
  return [active, setActive];
}

export default useTimedMessage;
