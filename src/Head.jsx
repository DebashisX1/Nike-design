
import './head.css'

let code = 
<header class='head'>
  <img src="./public/nike.jpg" alt="" class='nike'/>
  <nav>
    <ul>
      <li>HOME</li>
      <li>LOCATION</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
  </nav>
  <button class='login'>LOGIN</button>
</header>;

function Head() {

  return (
    <>
    {code}
    </>
  )
}
export default Head
