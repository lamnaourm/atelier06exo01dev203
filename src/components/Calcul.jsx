import React, { Component } from 'react';

class Calcul extends Component {
    constructor(props){
        super(props)

        this.state = {
            capital:0,
            taux:0,
            duree:0,
            mensualite:0,
        }
    }

    handleOnchange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleOnSubmit = (evt) => {
        evt.preventDefault();
        let m= (this.state.capital * this.state.taux/100/12) / (1 - Math.pow(1+this.state.taux/100/12, -this.state.duree))
        this.setState({mensualite: m})
    }

    render() {
        return (
            <div className='calcul'>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Capital emprunte : </label>
                        <input type='number' name='capital' value={this.state.capital} onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Taux d'interet : </label>
                        <input type='number' name='taux' value={this.state.taux} onChange={this.handleOnchange}/>
                    </div>
                    <div>
                        <label>Duree rembourssement :</label>
                        <input type='number' name='duree' value={this.state.duree} onChange={this.handleOnchange} />
                    </div>
                    <hr/>
                    <input type='submit' value='Calculer'/>
                    <div>
                        <label>La mensualite :</label>
                        <input type='number' name='mensualite' value={this.state.mensualite.toFixed(2)} disabled/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calcul;
