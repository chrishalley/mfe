import { mount } from "dashboard/Dashboard";
import React, { useRef, useEffect } from 'react'

export const DashboardApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
