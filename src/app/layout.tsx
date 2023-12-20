import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/static/css/frontend.css';
import './resources/static/css/font-awesome.min6654.css';
import { Metadata } from 'next';
import { CartProvider } from './providers/cart/CartProvider';
import 'primereact/resources/primereact.min.css';
import './globals.css';

export const metadata: Metadata = {
	title: 'Wiggles',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<CartProvider>
				<body>
					{children}
				</body>
			</CartProvider>
		</html>
	);
}
