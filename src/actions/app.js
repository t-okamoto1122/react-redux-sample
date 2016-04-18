/*
* APIを叩くなどの動作はここに書く、reducerに渡す処理
*/

//import AppActions from '../actions/app'で呼び出し
export default {
  increment: () => {
    return { type: 'INCREMENT' }
  }
}

//import {increment} from '../actions/app' で呼び出し
export function increment(){
    return {
        type: 'INCREMENT'
    }
}