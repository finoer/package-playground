// 引入样式文件，用于清除浏览器默认样式
import './assets/css/cssreset-min.css'
import write from './write'
import { HelloWorld } from 'package-startup'

write()
console.log('Package', HelloWorld.write())

export default {}
