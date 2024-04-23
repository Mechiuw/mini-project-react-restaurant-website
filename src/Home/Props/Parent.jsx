import {Component} from 'react';

class Parent extends Component{
    render() {
        return (
            <div>

                {/* eslint-disable-next-line react/prop-types */}
                <button onClick={() => this.props.increment()}>Increment</button>
                {/* eslint-disable-next-line react/prop-types */}
                Count : {this.props.count}
            </div>
        );
    }
}
export default Parent;