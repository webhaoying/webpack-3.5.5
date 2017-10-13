/**
 * Created by roboterra_rd on 2017/10/12.
 */
import { post } from '../post.js'
export function loginFetch(username,password) {
    return post('http://gbscn1.roboterra.com.cn:9000/api/register', {
        username:username,
        password:password,
        nickname:'hao',
        given_name:111,
        family_name:222,
        region:333,
        language:'zh_CN'
    });
}