import React from 'react';

function Cart({ cart, setCart }) {
    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    return (
        <div>
            <h2>Cart Items</h2>
            <div className="card-deck">
                {cart.map((product, index) => (
                    <div className="card mb-3" key={index} style={{ maxWidth: '300px' }}>
                        <img src={product.image} alt={product.title} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">Price: ${product.price}</p>
                            {/* Add additional information about the item */}
                            <button className="btn btn-primary" onClick={() => removeFromCart(index)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;