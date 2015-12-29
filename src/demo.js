import React from 'react';
import ReactDOM from 'react-dom';
import HotelsOnMap from './index';
import demoData from './demoData';

class StatefulContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mode: 'all'};
    }

    render() {
        return <div>
            <p>
                <select value={this.state.mode} onChange={this.handleModeSelection.bind(this)}>
                    <option value='all'>All hotels</option>
                    <option value='one'>First hotel</option>
                </select>
            </p>

            <HotelsOnMap ref='hotelsOnMap' hotels={this.hotels()}/>
        </div>;
    }

    hotels() {
        return (this.state.mode === 'one' ? [demoData[0]] : demoData);
    }

    handleModeSelection({target: {value}}) {
        this.setState({mode: value}, () => {
            this.refs.hotelsOnMap.resetMap();
        });
    }
}

/* global global */

ReactDOM.render(<StatefulContainer/>, global.document.getElementById('root'));
