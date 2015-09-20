import React from 'react';

export class FuckComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 onClick={()=>this.props.onFuckClick("hahahafuck")}>
                    Hello world!!{this.props.fuckState}
                </h1>
            </div>
        )
    }
}
