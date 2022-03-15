import React from 'react'
import './SectionTitle.scss'
const SectionTitle = (props) => {
  return (
    <div ref={props.reference} className={`section-title ${props.lightMode ? 'light' : ''} ${props?.className}`}>
            <h2>{props.title}</h2>
            {props?.subtitle && <span>{props.subtitle}</span>}
            <div className='separator'></div>
        </div>
  )
}

export default SectionTitle