import './styles/style.css'
import holamundo from './components/holamundo'

document.querySelector('#app').innerHTML = `
  <div>
    ${holamundo()}
  </div>
`


