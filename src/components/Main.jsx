import React from 'react';
import Slider from './Slider';
import NumberInput from './NumberInput';
import ColorPicker from './ColorPicker';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: 5,
            background: '#F4EAE1',
            bgSize: 13,
            min: 3,
            max: 20,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }
    handleChange(e){
        this.setState({
            cardNumber: e.target.value,
            bgSize: (e.target.value - this.state.min) * 100 / (this.state.max - this.state.min)
        })
    }
    handleChangeComplete(event){
        this.setState({ 
            background: event.hex 
        });
    };
    render(){
        return(
            <main className="flex flex-col justify-center min-h-screen py-8" style={{backgroundColor: this.state.background}}>
                <section className="w-4/5 flex justify-between mx-auto px-8 flex-col xl:flex-row">
                    <h1 className="text-5xl pb-3 xl:pb-0">Section Cards</h1>
                    <div className="flex gap-5 md:gap-12 flex-col md:flex-row md:items-center">
                        <NumberInput 
                        cardNumber={this.state.cardNumber} 
                        handleChange={this.handleChange} 
                        bgSize={this.state.bgSize}
                        min={this.state.min}
                        max={this.state.max}/>
                        <ColorPicker 
                        onChangeComplete={ this.handleChangeComplete } 
                        background={this.state.background}/>
                    </div>
                </section>
                <Slider cardNumber={this.state.cardNumber}/>
            </main>
        )
    }
}
export default Main;