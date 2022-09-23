import React from 'react';
import '../styles/numberInput.css'
class NumberInput extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const inputStyle = {
            backgroundSize: this.props.bgSize + '% 100%'
        }
        return(
            <div className="flex gap-2 text-sub-text items-center">
                <label>Number of <br/> cards:</label>
                <input
                    id="slider"
                    value={this.props.cardNumber}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.handleChange}
                    style={inputStyle}
                />
                <span className="block w-6">{this.props.cardNumber}</span>
            </div>
        )
    }
}
export default NumberInput;