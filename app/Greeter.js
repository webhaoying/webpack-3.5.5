/**
 * Created by roboterra_rd on 2017/9/29.
 */
import React from 'react';
import config from './config.json';
import styles from './Greeter.css';
import styles1 from './Greeter1.css';

export default class Greeter extends React.Component{
    render(){
        return(
            <div>
                <div className={styles.root} >
                    {config.greetText}zhanghao

                </div>

                <div className={styles1.root}>
                    {config.greetText}

                </div>
            </div>

        )
    }
}

