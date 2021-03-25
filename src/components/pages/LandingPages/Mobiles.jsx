import React from 'react'

function Mobiles() {
    return (
        <div className="Mobiles" style={{marginTop:"2rem"}}>
            <div className="fhead" style={{textAlign:"center"}}>
                <h1 style={{marginBottom:"1rem"}}>Best Seller Mobiles</h1>
                <button type="button" class="rounded-pill btn btn-danger">View all</button>
            </div>
            <div className=" box-container">
                <div className="box parent">
                    <div className="image">
                        <a href="/" ><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONETELE288739EED7902A/1604323613411_0.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹58,000</span> <spant style={{textDecoration: "line-through"}}>₹59,000</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Apple iPhone 11</h6></a>
                        <div className="alert alert-success btn"><span>Offers worth ₹1080</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBREDMI-9I-4-GM-S-136429CE5A714/1603283059439_10.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹8,778</span> <spant style={{textDecoration: "line-through"}}>₹9,200</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Redmi 9i</h6></a>
                        <div className="alert alert-success btn"><span>Offers worth ₹1080</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBREALME-7-6-GBALA816012A18F9E10/1600703278893_0.jpeg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹15,250</span> <spant style={{textDecoration: "line-through"}}>₹17,220</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Realme 7</h6></a>
                        <div className="alert alert-success btn"><span>Offers worth ₹1080</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBSAMSUNG-GALACELL136902FFBFE90E/0.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹7,999</span> <spant style={{textDecoration: "line-through"}}>₹9,720</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">Samsung Galaxy M01</h6></a>
                        <div className="alert alert-success btn"><span>Offers worth ₹1080</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBAPPLE-IPHONESTRI273684103F7E0/1603979128717_0..jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹53,000</span> <spant style={{textDecoration: "line-through"}}>₹54,880</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">Apple iPhone 11 Black</h6></a>
                        <div className="alert alert-success btn"><span>Offers worth ₹1080</span></div>
                    </div>
                </div>
            </div>
            <div className="line" style={{textAlign:"center"}}>
            <hr className=" rounded-pill  mb-3 mt-1 d-inline-block mx-auto" style={{width:"150px", height:"10px",color:"red"}}/>
            </div>
        </div>
    )
}

export default Mobiles
