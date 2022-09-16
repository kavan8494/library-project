import "./header.css"
export default function Header() {
  return (
    <div className="headercontainer">
      <img src="./assets/images/bgimg.jpg" height="1000px" width="1600px" alt=""/>
      <div className="buttonitems">
      <button className="buttons">admin login</button>
      <button className="buttons">user login</button>
      </div>
    </div>
  )
}
