import ReactDOM from "react-dom";

const Portal = ({children}) => {
  if(process.browser) {
    const element = document.getElementById("portalRoot");
    return element ? ReactDOM.createPortal(children, element) : null;
  }
}

export default Portal;