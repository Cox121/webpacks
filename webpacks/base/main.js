import './test.css'
import '../assets/img1.bmp'

var a = 'ddas33323456'
document.getElementById('input2').value = a

if (module.hot) { //接收热更替
  module.hot.accept();
}