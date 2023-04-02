import React  from "react";
import { useNavigate } from 'react-router-dom';
import "./button.css"
const ButtonView = ({ className, text, route=null }) => {
    const navigate = useNavigate();
  return (
    <button className={className} onClick={route != null ? () => navigate(route): null} type="submit">
      {text}
    </button>
  );
};

export default ButtonView;
