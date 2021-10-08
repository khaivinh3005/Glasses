import React from 'react'

export default function ProductFunction(paramester) {
    let { products } = paramester;

    return (
        products.map((item, index) => {
            return (
                <div className="card col-lg-3 col-md-6" key={index} style={{ width: '18rem' }}>
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            )
        })
    )
}
