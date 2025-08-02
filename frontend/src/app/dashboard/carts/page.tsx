"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/features/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 md:p-12">
      <div className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-md md:p-12">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900">
          🛒 Your Cart
        </h2>

       
          <div className="flex h-48 flex-col items-center justify-center text-center text-gray-500">
            <p className="mb-4 text-xl">Your cart is empty.</p>
            <p>
              Start adding products to your cart to see them here.
            </p>
          </div>
       
          <div className="space-y-6">
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-transform hover:scale-[1.01] hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    {/* Placeholder for a product image */}
                    <div className="h-16 w-16 rounded-md bg-gray-100"></div> 
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-400">
                        Price: ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 rounded-full border border-gray-300 p-1">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-200"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-200"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-600"
                      aria-label="Remove item"
                    >
                      <span className="text-sm">❌</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between border-t border-gray-200 pt-6 font-bold text-gray-900">
              <span className="text-xl">Subtotal:</span>
              <span className="text-2xl">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <button
                className="w-full rounded-lg bg-gray-900 px-6 py-4 text-xl font-bold text-white transition-colors hover:bg-gray-800"
                onClick={() => alert('Proceed to checkout')}
              >
                Proceed to Checkout
              </button>
              <button
                className="w-full rounded-lg bg-gray-100 px-6 py-4 text-xl font-bold text-gray-800 transition-colors hover:bg-gray-200"
                onClick={() =>
                  dispatch(
                    addItem({ id: "1", name: "Sample Product", price: 100, quantity: 1 })
                  )
                }
              >
                ➕ Continue Shopping (Add Sample Item)
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}