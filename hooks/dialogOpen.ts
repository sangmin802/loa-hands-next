import { useEffect } from "react";

const RemoveScrollHook = dialog => {
  useEffect(() => {
    // body에 overflow-y hidden 주는방식은 ios에서 적용 안됨
    const body = document.querySelector("body");
    const top = window.pageYOffset;
    if (dialog) {
      const style = `
        position: fixed;
        top: -${top}px;
        left: 0px;
        right: 0px;
      `;
      body.setAttribute("style", style);
    }
    return () => {
      if (dialog) {
        body.setAttribute("style", "");
        window.scrollTo(0, top);
      }
    };
  }, [dialog]);
};

export default RemoveScrollHook;
