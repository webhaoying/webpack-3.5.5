/**
 * Created by roboterra_rd on 2017/9/29.
 */
import React from 'react';
import {render} from 'react-dom';
import mainstyle from './main.css';
import styles from './static/css/common.less';
class  Hello extends  React.Component{
    render(){
        var arr =['aa','bb','cc'];
        return (
                <div className={styles.aaa}>
                    第一层元素
                    <div className={styles.bbb}>
                        less-test
                    </div>
                    <div className={mainstyle.bbb}>
                        css-test
                    </div>
                    <ul>
                        {
                            arr.map(
                                function (item, index) {
                                    return <li key={index}> {item} </li>
                                }
                            )
                        }
                    </ul>

                </div>
        )
    }

}

render(<Hello />, document.getElementById('root'));
