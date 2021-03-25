import React from 'react'

function S12electrobest() {
    return (
        <div className="S12electrobest" style={{marginTop:"2rem"}}>
            <div className="fhead" style={{textAlign:"center"}}>
                <h1 style={{marginBottom:"1rem"}}>Electronics Bestsellers</h1>
                <button type="button" class="rounded-pill btn btn-danger">View all</button>
            </div>
            <div className=" box-container">
                <div className="box parent">
                    <div className="image">
                        <a href="/" ><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOAT-ROCKERZCLIC252498B030EDE0/0..jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹800</span> <spant style={{textDecoration: "line-through"}}>₹900</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">boAt Rockerz</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹32</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMBOAT-BASSHEACLIC252498396E26F9/1562672507532_31.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹315</span> <spant style={{textDecoration: "line-through"}}>₹400</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">boAt bassheads 100</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹10</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMACID-EYE-HBSPICK21852498777D3C/1616560123013_20.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹315</span> <spant style={{textDecoration: "line-through"}}>₹365</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Acid eye HBS-730</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹10</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBBOAT-BASSHEACLIC25249869C23473/1562653108739_0.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹600</span> <spant style={{textDecoration: "line-through"}}>₹720</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">BoAt Red 150</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹15</span></div>
                    </div>
                </div>
                <div className="box parent">
                    <div className="image">
                    <a href="/"><img className="child" src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBJBL-C50HI-INE-PL2276490780A32/1569223111458_11.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹700</span> <spant style={{textDecoration: "line-through"}}>₹920</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">JBL</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹50</span></div>
                    </div>
                </div>
            </div>
            <div className="line" style={{textAlign:"center"}}>
            <hr className=" rounded-pill  mb-3 mt-1 d-inline-block mx-auto" style={{width:"150px", height:"10px",color:"red"}}/>
            </div>
        </div>
    )
}

export default S12electrobest
