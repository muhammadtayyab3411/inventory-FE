import React from 'react'
import "./productInformation.css"
import ProductImage from "../../assets/home-bg.png"

const ProductInformation = () => {
  return (
    <div className='p-info container rounded-lg  p-4 mt-2 mb-0'>
        <div className="productName">Magi</div>
        <p className='mt-4'>Overview</p>
        <hr className='product-hr'/>

        <div className="p-details d-flex p-4">
            <div className="primaryDetails d-flex flex-column">
                <p className='detail-heading'>Primary Details</p>
                <div className="p-name d-flex justify-content-between">
                    <div className="title">
                        <p>Product Name</p>
                    </div>
                    <div className='info'>
                        <p>Maggi</p>
                    </div>
                </div>

                <div className="p-id d-flex justify-content-between">
                    <div className="title">
                        <p>Product Id</p>
                    </div>
                    <div className='info'>
                        <p>4532</p>
                    </div>
                </div>

                <div className="p-category d-flex justify-content-between">
                    <div className="title">
                        <p>Product Category</p>
                    </div>
                    <div className='info'>
                        <p>Instant Food</p>
                    </div>
                </div>

                <div className="expiry-date d-flex justify-content-between">
                    <div className="title">
                        <p>Expiry Date</p>
                    </div>
                    <div className='info'>
                        <p>27/01/2024</p>
                    </div>
                </div>

                <div className="p-quantity d-flex justify-content-between">
                    <div className="title">
                        <p>Product Quantity</p>
                    </div>
                    <div className='info'>
                        <p>1</p>
                    </div>
                </div>

                <div className="p-threshold d-flex justify-content-between">
                    <div className="title">
                        <p>Threshold Value</p>
                    </div>
                    <div className='info'>
                        <p>10</p>
                    </div>
                </div>

                <p className='detail-heading'>Supplier Details</p>

                <div className="supplier-name d-flex justify-content-between">
                    <div className="title">
                        <p>Supplier Name</p>
                    </div>
                    <div className='info'>
                        <p>Ronald Martin</p>
                    </div>
                </div>

                <div className="supplier-contact d-flex justify-content-between">
                    <div className="title">
                        <p>Supplier Contact</p>
                    </div>
                    <div className='info'>
                        <p>92307124212</p>
                    </div>
                </div>
            </div>
            
            <div className="basicDetails d-flex flex-column">
                <div className="productImage w-50 d-flex">
                    <img src={ProductImage} alt="" className="p-image"/>
                </div>

                <div className="b-details d-flex flex-column">

                    <div className="opening-stock d-flex justify-content-between">
                        <div className="title">
                            <p>Opening Stock</p>
                        </div>
                        <div className='info'>
                            <p>40</p>
                        </div>
                    </div>

                    <div className="remaining-stock d-flex justify-content-between">
                        <div className="title">
                            <p>Remaining Stock</p>
                        </div>
                        <div className='info'>
                            <p>10</p>
                        </div>
                    </div>

                    <div className="on-way d-flex justify-content-between">
                        <div className="title">
                            <p>On the Way</p>
                        </div>
                        <div className='info'>
                            <p>15</p>
                        </div>
                    </div>

                </div>                

             </div>
        </div>

        <div className="stockLocations p-4">
            <p className='detail-heading'>Stock Locations</p>

            <div className="store-details d-flex justify-content-between ">
                <div className="store-title">
                    <p>Store Name</p>
                </div>
                <div className='store-title-info'>
                    <p>Stock In Hand</p>
                </div>
            </div>

            <div className="store-info d-flex justify-content-between">
                <div className="title">
                    <p>Sulur Branch</p>
                </div>
                <div className='info'>
                    <p>15</p>
                </div>
            </div>

            <div className="store-info d-flex justify-content-between">
                <div className="title">
                    <p>Singanallur Branch</p>
                </div>
                <div className='info'>
                    <p>19</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductInformation
