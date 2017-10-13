import React from 'react'
//引用components中的对应js文件
import  RegisterComponent from '../../components/registerComponent/RegisterComponent.js'
//引用css文件
import  registerCss from './register.css'
class Register extends React.Component {

    render() {
        console.log(this.props);
        return (
            <RegisterComponent/>
        )
    }
}

export default Register