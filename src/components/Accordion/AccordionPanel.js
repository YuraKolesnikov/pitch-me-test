import React from 'react'
import ReactDOM from 'react-dom'

import './Accordion.scss'

class AccordionPanel extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			const el = ReactDOM.findDOMNode(this);
			const height = el.querySelector('.Accordion__Body').scrollHeight;
			this.setState({
				height
			});
		}, 333);
	}

	render () {
		const { title, content, activeTab, index, activateTab } = this.props;
		const { height } = this.state;
		const isActive = activeTab === index;
		
		const innerStyle = {
			height:  `${isActive ? height : 0}px`
		}

		return (
			<div className='Accordion__Panel'
				role='tabpanel'
				aria-expanded={ isActive }>
				<button className='Accordion__Trigger'
					role='tab'
					onClick={ activateTab }>
					{ title }
				</button>
				<div className='Accordion__Body'
					style={ innerStyle }
					aria-hidden={ !isActive }>
					<p className='Accordion__Text'>
						{ content }
					</p>
				</div>
			</div>
		);
	}
}

export default AccordionPanel