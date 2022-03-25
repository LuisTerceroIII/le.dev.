import React  from "react";
import { useNavigate } from 'react-router-dom';

const LandingButtonView = ({ className, text }) => {
    const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate('/aboutme')}>
      {text}
    </button>
  );
};

export default LandingButtonView;
