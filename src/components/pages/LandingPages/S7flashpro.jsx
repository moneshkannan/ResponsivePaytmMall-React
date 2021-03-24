import React from 'react'
import "./S7flashpro.css"
function S7flashpro() {
    return (
        <div className="S7flashpro" style={{marginTop:"2rem"}}>
            <div className="fhead" style={{textAlign:"center"}}>
                <h1 style={{marginBottom:"1rem"}}>Flash Products</h1>
                <button type="button" class="rounded-pill btn btn-danger">View all</button>
            </div>
            <div className=" box-container">
                <div className="box">
                    <div className="image">
                        <a href="/" ><img src="https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATREALME-RMA16ONE-47081B97EAA2/0..jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹815</span> <spant style={{textDecoration: "line-through"}}>₹1,200</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Watch</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹50</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/C/CO/COMAPPLE-MV7N2HTELE2887394B147781/1562676539664_0..jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹18,815</span> <spant style={{textDecoration: "line-through"}}>₹20,200</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Airpod</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹550</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMMILTON-INSULHAMI57216FB0262E4/1583407869954_26.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹905</span> <spant style={{textDecoration: "line-through"}}>₹1,100</spant>
                        </div>
                        <a href="/" style={{color:"black"}}><h6 className="title">Flask</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹50</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMHAWKINS-STAIPATR22602A285B49C/1580898367968_4.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹500</span> <spant style={{textDecoration: "line-through"}}>₹800</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">Cooker</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹50</span></div>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="/"><img src="https://assetscdn1.paytm.com/images/catalog/product/P/PE/PERPHILIPS-BT12TRUE11677635D34D6D/0.jpg?imwidth=280&impolicy=hq" alt="watch" /></a>
                    </div>
                    <div className="info" style={{textAlign:"center"}}>
                        <div className="price">
                            <span style={{color:"orangered",fontSize:"20px"}}>₹1,200</span> <spant style={{textDecoration: "line-through"}}>₹1,500</spant>
                        </div>
                        <a href="/"  style={{color:"black"}}><h6 className="title">Trimmer</h6></a>
                        <div className="alert alert-success btn"><span>Cashback ₹50</span></div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default S7flashpro
