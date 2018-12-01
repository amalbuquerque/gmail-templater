import React, { Component } from 'react';

class ReplyTemplate extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const message = 'template#' + this.props.contents;

        // eslint-disable-next-line
        parent.postMessage(message, '*');

        console.log('Clicked on ' + this.props.number + ' Contents: ' + this.props.contents);
    }

    render() {
        return(
            <tr>
              <td>
                {this.props.number}
              </td>
              <td>
                {this.props.contents}
              </td>
              <td>
                <button onClick={this.handleClick}>Select</button>
              </td>
            </tr>
        )
    }
}

export default ReplyTemplate;
