import { useCart } from "../../context/CartContext";
import { ButtonContainer } from '../../components/Button/styles'

const Cart = () => {
	
	const { cart, addOneToCart, removeFromCart, getTotal, confirmPurchase } = useCart();
	
	const priceFormat = (price) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		}).format(price);
	}
	
	return (
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
	);
}

export default Cart;