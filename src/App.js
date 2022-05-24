import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setcartIsShown] = useState(false);

    const cartHandler = () => {
        setcartIsShown(!cartIsShown)
    }
    return (
        <CartProvider>
            { cartIsShown && <Cart onClose={cartHandler} />}
            <Header onShowCart={cartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
