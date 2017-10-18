/**
 * Created by roboterra_rd on 2017/10/17.
 */
import React from 'react'

class HelloWorld extends React.Component {
    clickHander(){
        console.log(this.refs.hello)
        console.log(this.refs.hello.innerHTML)
    }

    refCallback(elem){
        console.log(elem);
    }

    render () {
        return (
            <div className="container" onClick={this.clickHander.bind(this)}>
                <div ref="hello" className="hello">Hello</div>
                <div ref={this.refCallback.bind(this,123)} className="world">World</div>
            </div>
        )
    }
}

export default HelloWorld;