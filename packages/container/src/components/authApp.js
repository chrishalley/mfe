import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/Auth";

export const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn
    });
    
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
