import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Portal = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  const element = document.getElementById("portalRoot");
  return element ? ReactDOM.createPortal(children, element) : null;
}