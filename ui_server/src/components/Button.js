import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  if (props.data.onClick) {
    return (
      <button className={`point pix20 white-text-with-blue-shadow ${props.data.className}`} onClick={props.data.onClick}>{props.data.title}</button>
    )
  } else {
    return (
      <button className={`subCont point pix20 white-text-with-blue-shadow ${props.data.className}`}><Link className="white" to={props.data.url}>{props.data.title}<br /><span className="pix10 yellow">{props.data.li ? props.data.li.map((item, idx) => <p key={idx}>{item}</p>) : null}</span></Link></button>
    )
  }
}

export default Button