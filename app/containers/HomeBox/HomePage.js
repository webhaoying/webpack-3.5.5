import React from 'react'
import HeaderComponent from '../../components/headComponent/headComponent.js'
class HomePage extends React.Component {
    render() {
        console.log(this.props.children);
        return (
            <div id="index_container">
                <HeaderComponent/>
                <div>{this.props.children}</div>
            </div>

        )
    }
}

export default HomePage