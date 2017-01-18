import * as React from 'react';

interface ThingProps {
    number: number
}

export default class Thing extends React.Component<ThingProps,any> {
    constructor() {
        super();
    }
    render() {
        return <div>Hello Again</div>
    }
}





