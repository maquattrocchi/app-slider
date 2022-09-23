import React from 'react';
import { ChromePicker } from 'react-color';
import '../styles/colorPicker.css'

class ColorPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openToggle: false,
        }
        this.showPicker = this.showPicker.bind(this)
    }
    showPicker(){
        this.setState({
            openToggle: !this.state.openToggle,
        })
    }
      render() {
        return (
            <div>
                <span className="text-sub-text align-middle mr-3">Background Color:</span>
                <div className="relative align-middle inline-block">
                    <div onClick={this.showPicker} 
                    className="relative color-input"
                    style={{backgroundColor: this.props.background}}>

                    </div>
                        <ChromePicker
                        className={this.state.openToggle ? 'block' : 'hidden'}
                        color={ this.props.background }
                        onChangeComplete={ this.props.onChangeComplete}
                    />
                </div>

            </div>
        );
      }
}

export default ColorPicker;