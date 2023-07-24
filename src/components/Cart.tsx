import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";

const Cart = () => {
    const [confirm, setConfirm] = useState<boolean>(false);

    const { cart, dispatch, REDUCER_ACTIONS, totalItems, totalPrice } =
        useCart();

    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);
    };

    const pageContent = confirm ? (
        <h2>Thank You for ordering on Top Shop :)</h2>
    ) : (
        <>
            <h2 className="offscreen">Cart</h2>
            <ul className="cart">
                {cart.map((item) => (
                    <CartLineItem
                        key={item.sku}
                        item={item}
                        dispatch={dispatch}
                        REDUCER_ACTIONS={REDUCER_ACTIONS}
                    />
                ))}
            </ul>
            <div className="cart__totals">
                <p>Total Item: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <button
                    className="cart__submit"
                    onClick={onSubmitOrder}
                    disabled={!totalItems}
                >
                    Place Order
                </button>
            </div>
        </>
    );

    const content = <main className="main main--cart">{pageContent}</main>;

    return content;
};

export default Cart;
