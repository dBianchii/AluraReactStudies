import React from "react"

class Button extends React.Component {
	render() {
		const backgroundColor = "red"
		return (
			<button
				style={{
					backgroundColor,
				}}
			>
				Button
			</button>
		)
	}
}

export default Button
