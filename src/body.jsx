import './body.css'

let body =
<div className="body">
      <div className="left">
         <div className="text">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <h6>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</h6>
         </div>
         <div className="button">
            <button className='shop'>Shop Now</button>
            <button className="category">Category</button>
         </div>
         <div className="store">
            <h6>Also available on</h6>
            <div className="store-icons">
               <img className="icon" src="./public/flipkart.png" alt="Flipkart" /> 
               <img className="icon" src="./public/amazon.png" alt="Amazon" />

            </div>
         </div>
      </div>
      <div className="right">
         <img src="./public/footware.png" alt="Nike" class='footware'/>
      </div>
</div>


function Body() {
    return (
      <>
      {body}
      </>
    )
}

export default Body