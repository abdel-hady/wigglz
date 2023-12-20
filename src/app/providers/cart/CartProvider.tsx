/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import React, { createContext, useState } from 'react';

export type CartItem = {
	id: string;
	name: string;
	price: number;
	image: string;
};

type CartContextType = {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (itemId: string) => void;
	isCartOpen: boolean;
	showCart: () => void;
	hideCart: () => void;
	toggleCart: () => void;
};

export const CartContext = createContext<CartContextType>({
	cartItems: [],
	addToCart: () => { },
	removeFromCart: () => { },
	isCartOpen: false,
	showCart: () => { },
	hideCart: () => { },
	toggleCart: () => { },
});

interface CartProviderProps {
	children: React.ReactNode
}
export function CartProvider({ children }: CartProviderProps) {
	const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const addToCart = (item: CartItem) => {
		setCartItems((prevItems) => [...prevItems, item]);
	};

	const removeFromCart = (itemId: string) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
	};

	const showCart = () => {
		setIsCartOpen(true);
	};

	const hideCart = () => {
		setIsCartOpen(false);
	};

	const toggleCart = () => {
		setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				isCartOpen,
				showCart,
				hideCart,
				toggleCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
