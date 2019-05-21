import './test.css'
import '../assets/img1.bmp'

let a = () => {
  console.log(111)
}

a()

if (module.hot) { //接收热更替
  module.hot.accept();
}