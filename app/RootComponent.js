import React from 'react';
import {connect} from 'react-redux';
//引入connect需要的映射方法
import {mapStateToProps,mapDispatchToProps} from './maptoProps';

//引入下级组件
import {FuckComponent} from './components/FuckComponent';

class RootComponent extends React.Component {
    render() {
        return (
            <FuckComponent
                fuckState={this.props.fuckState}
                onFuckClick={this.props.onFuckClick} />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RootComponent);
