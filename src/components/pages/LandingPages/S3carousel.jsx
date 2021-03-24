import React from 'react'
import "./S3carousel.css"
function S3carousel() {
    return (
        <div >
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="mx-auto carousel-inner w-75 ">
                    <div class="carousel-item active">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/773635/1616176636395.jpg?imwidth=480&impolicy=hq"  class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/773639/1616177002831.png?imwidth=480&impolicy=hq" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/773636/1616176904256.png?imwidth=480&impolicy=hq" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev w-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next w-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default S3carousel
