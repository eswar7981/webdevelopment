import React,{useState} from 'react';
import CourseInput from '../../CourseGoals/CourseInput/CourseInput';
import './Button.css';

const Button = props => {
   
  

  return (
    <div className={`buttons ${!props.valid ?'invalid':''}`}>
    <button  type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
    </div>
  );
};

export default Button;
