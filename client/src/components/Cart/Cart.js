import React, { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import Auth from '../../utils/auth';
import './style.css';

import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';

import { useDispatch, useSelector } from 'react-redux';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

const Cart = () => {
    const state = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

    const[getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        // function to get data from IndexedDB
         function getCart() {
        idbPromise('cart', 'get')
        .then(cart =>{
             dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] })
        })
           
        };
        // check global state for any cart products, or use function to retrieve data from the IndexedDB store
        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    useEffect(() => {
        if(data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            });
        }
    }, [data]);
// Submits toggle carts
    const toggleCart = () => {
        dispatch({ type: TOGGLE_CART });
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>
                <span role="img" aria-label="cart">🛒</span>
            </div>
        )
    }
// Submits total
    const calculateTotal = ()=> {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }
// Submits products
    const submitCheckout = () => {
        const productIds = [];

        getCheckout({
            variables: { products: productIds }
        });

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id)
            }
        });
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>[close]</div>
            <h2>Shopping Cart</h2>
            {state.cart.length ? (
                <div>
                {state.cart.map(item => (
                    <CartItem key={item._id} item={item} />
                ))}
                <div className="flex-row space-between">
                    <strong>Total: ${calculateTotal()}</strong>
                    {
                    Auth.loggedIn() ?
                        <button onClick={submitCheckout}>
                        Checkout
                        </button>
                        :
                        <span>(log in to check out)</span>
                    }
                </div>
                </div>
            ) : (
                <h3>
                <span role="img" aria-label="shocked">
                    😱
                </span>
                You haven't added anything to your cart yet!
                </h3>
            )}
        </div>
    );
};

export default Cart;