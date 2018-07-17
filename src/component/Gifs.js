import React, { Component } from 'react';

class Gifs extends Component {

    handleClick() {
        console.log("IMAGE AS BEEN CLICKED! (props) ", this.props.gifs.id);
    }

    render(props) {

        console.log("Gifs PROPS: ", props);

        const imgStyle = {
            margin: '1rem'
        }

        let gifArray = this.props.gifs.map(gif => {
            console.log("gifArray (props): ", gif);

            return (
                <img key={gif.id} onClick={this.handleClick} src={gif.source} alt="doggo" height="200" width="200" style={imgStyle}></img>
            )
        });
        
        return (
            <div>
                <h4 className="display-4">THE GIFS BITCH</h4>
                <br />
                <span>
                    {gifArray}
                    {gifArray}
                </span>
                <br />
            </div>
        )
    }
}

export default Gifs;