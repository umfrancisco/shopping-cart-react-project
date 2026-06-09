import { useCart } from "../../context/CartContext";
import { ButtonContainer } from '../../components/Button/styles'
import { getCarts } from '../../api/productService'
import { useState, useEffect } from 'react'

const Cart = () => {
	
	const { cart, addOneToCart, removeFromCart, getTotal, confirmPurchase } = useCart();
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	}
	
	function formatOrders(item) {
		const { cartId, total, purchaseDateTime } = item;

		const formattedTotal = priceFormat(total);

		const date = new Date(purchaseDateTime);
		const formattedDate = date.toLocaleString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});

		return `ID do pedido: ${cartId} | Total pago: ${formattedTotal} | Data da compra: ${formattedDate}`;
	}
	
	const [cartHistory, setCartHistory] = useState([]);

	useEffect(() => {
	  getCarts()
	    .then(setCartHistory)
	    .catch(console.error);
	}, []);
	
	return (
		<>
		<div className='cart'>
		   <h2>Cart</h2>

		   {cart.length === 0 && <p>Cart is empty</p>}

		   {cart.map((item) => (
		     <div key={item.id}>
		       <p>
		         {item.name} (x{item.quantity}) <br />
		         {priceFormat(item.price * item.quantity)}
		       </p>
			   <ButtonContainer onClick={() => addOneToCart(item.id)}>
			     +
			   </ButtonContainer>
		       <ButtonContainer onClick={() => removeFromCart(item.id)}>
		         -
		       </ButtonContainer>
		     </div>
		   ))}
		   <h3>Total: {priceFormat(getTotal())}</h3>
		   <br />
		   <ButtonContainer onClick={confirmPurchase}>Confirmar compra</ButtonContainer>
		 </div>
		 
		 <div className='cart'>
		 	<h2>Histórico de compras</h2>
			{cartHistory.map(
				(c) => (
					<p>{formatOrders(c)}</p>
				)
			)}
		 </div>
		</>
	);
}

export default Cart;