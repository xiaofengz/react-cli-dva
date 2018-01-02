import React, { Component } from 'react';
import Hello from './Component2';

export class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                component1
                <Hello compiler="TypeScript" framework="React" />
            </div>
         )
    }
}
 
export default Component1;