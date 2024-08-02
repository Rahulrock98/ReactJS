import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )

}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}
const anothterElement = (
  <a href="https://google.com" target="_blank">visit google </a>
)
const anotherUser = " chai aur code"
const createElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  createElement
)
