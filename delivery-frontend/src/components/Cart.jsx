import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);
    const [user, setUser] = useState(null);
    const [address, setAddress] = useState('');
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setUser(null);
            return;
        }

        fetch('http://localhost:8081/user', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('Nije ulogovan');
                return res.json();
            })
            .then((user) => {
                setUser(user);
            })
            .catch(() => setUser(null));
    }, []);

    const order = async () => {
        const token = localStorage.getItem('token');
        if (!user || cart.length === 0 || !address || !token) return;

        try {
            await fetch('http://localhost:8081/catch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ address, cart }),
            });
            clearCart();
        } catch (err) {
            setError('Greška pri slanju porudžbine. Pokušajte ponovo.');
        }
    };

    const logoutFunction = () => {
        setUser(null);
        clearCart();
        localStorage.removeItem('token');
        window.location.href = 'http://localhost:3000';
    };

    if (!user) {
        return (
            <div className="cart">
                <p>Morate biti <strong>ulogovani</strong> da biste koristili korpu</p>
                <a href="http://localhost:8081/oauth2/authorization/google">
                    <button className="login-button">Uloguj se preko Google-a</button>
                </a>
            </div>
        );
    }

    return (
        <div className="cart">
            <h4>Dobrodošli, {user.name || user.email}!</h4>
            <h4>🛒 Korpa</h4>
            {error && <div className="error-message">{error}</div>}

            <label className="address">Adresa dostave:</label>
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Unesite adresu"
            />

            {cart.length === 0 ? (
                <p>Korpa je prazna</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}

            <div className="cart-buttons">
                <button className="clear-cart-button" onClick={clearCart}>
                    Ocisti korpu
                </button>
                <button
                    className="submit-order-button"
                    disabled={!address || cart.length === 0}
                    onClick={order}>
                    Potvrdi porudzbinu 🍔
                </button>
                <button className="logout" onClick={logoutFunction}>
                    Izloguj se
                </button>
            </div>
        </div>
    );
};

export default Cart;
