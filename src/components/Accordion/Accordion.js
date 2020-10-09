import React, { useState } from 'react'

import './Accordion.scss'

function Accordion(props) {
	const [ active, setActive ] = useState(false)

	const toogleActive = () => {
    setActive(!active)
  }

	return (
		<div className="Accordion">
			<button className="Accordion__Title" onClick={toogleActive}>
				<p>{ props.title }</p>
				<span className="Accordion__Icon"> > </span>
			</button>
			<div className={active ? 'Accordion__Body' : 'Accordion__Body Accordion__Body--collapsed'}>
				{ props.children }
			</div>
		</div>
	)
}

export default Accordion