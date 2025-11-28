import React, { useState, useContext, useEffect } from 'react';
import categories from '../components/data/categoryData';
import storeProducts from '../components/data/productData';
import services from '../components/data/serviceData';
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [isAdmin, setIsAdmin] = useState(false);

    const [ourServices, setourServices] = useState(services);
    const [products, setProducts] = useState(storeProducts);
    const [category, setCategory] = useState(categories);
    const [menuItems, setMenuItems] = useState(storeProducts);
    const [detailProduct, setDetailProduct] = useState(storeProducts[0]);
    const [cart, setCart] = useState([]);
    const [modalProduct, setModalProduct] = useState(storeProducts[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartSubTotal, setCartSubToatal] = useState(0);
    const [cartTaxGst, setCartTaxGst] = useState(0);
    const [cartTaxQst, setCartTaxQst] = useState(0);
    // const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);


    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setIsAdmin(user.roles.includes("ROLE_ADMIN"));
            // console.log(user)
        }

        EventBus.on("logout", () => {
            logOut();
        });
        return () => {
            EventBus.remove("logout");
        };

    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
    };


    //this is called on component mount
    useEffect(() => {
        
        //turn it into js
       let localCart = JSON.parse(localStorage.getItem("cart"));
        //load persisted cart into state if it exists
        if (localCart) setCart(localCart)

    }, []) //the empty array ensures useEffect only runs once

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(storeProducts);
            return;
        }

        const newItems = storeProducts.filter((item) => item.category === category);
        setMenuItems(newItems);

    };

    const getItem = id => {
        const product = products.find(item => item.id === id);
        return product;
    };

    const handleDetail = id => {
        const product = getItem(id);
        setDetailProduct(product);
    };


    const addToCart = id => {
        // let tempProducts = products;
        const index = products.indexOf(getItem(id));
        const productAddedToCart = products[index];
        productAddedToCart.inCart = true;
        productAddedToCart.count = 1;
        const price = productAddedToCart.price;
        productAddedToCart.total = price;
        setCart([...cart, productAddedToCart])
        localStorage.setItem("cart", JSON.stringify([...cart, productAddedToCart]));
    };

    useEffect(() => {
        addTotals();
    }, [cart])


    const openModal = id => {
        const product = getItem(id);
        setModalProduct(product)
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false)

    };


    const increment = id => {

        const selectedProduct = cart.find(item => {
            return item.id === id;
        });
        const index = cart.indexOf(selectedProduct);
        const product = cart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        addTotals();


    };

    const decrement = id => {
        const selectedProduct = cart.find(item => {
            return item.id === id;
        });
        const index = cart.indexOf(selectedProduct);
        const product = cart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            removeItem(id);
        } else {
            product.total = product.count * product.price;
        };
        addTotals();
    };

    const getTotals = () => {
        // const subTotal =   cart
        //   .map(item => item.total)
        //   .reduce((acc, curr) => {
        //     acc = acc + curr;
        //     return acc;
        //   }, 0);
        let subTotal = 0;
        cart.map(item => (subTotal += item.total));
        const gst = subTotal * 0.05;
        const qst = subTotal * 0.09975;
        const taxGst = parseFloat((gst).toFixed(2));
        const taxQst = parseFloat((qst).toFixed(2));
        // const tax = parseFloat((gst + qst).toFixed(2));
        const total = subTotal + taxGst + taxQst;
        return {
            subTotal, taxGst, taxQst, total
        };
    };

    const addTotals = () => {
        const totals = getTotals();
        setCartSubToatal(totals.subTotal);
        setCartTaxGst(totals.taxGst);
        setCartTaxQst(totals.taxQst);
        setCartTotal(totals.total)

    };




    const removeItem = id => {
        const index = products.indexOf(getItem(id));
        let removedProduct = products[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        let tempCart = cart.filter(item => {
            return item.id !== id;
        });
        setCart(tempCart);
        addTotals();
        localStorage.setItem("cart", JSON.stringify(tempCart));


    };


    const clearCart = () => {
        setCart([]);
        products.map(product => product.inCart = false)
        addTotals();
    
    };

    return (
        <AppContext.Provider
            value={{ ourServices, currentUser, isAdmin, products, category, menuItems, detailProduct, cart, isModalOpen, cartSubTotal, cartTaxGst, cartTaxQst, cartTotal, modalProduct, logOut, filterItems, handleDetail, addToCart, openModal, closeModal, increment, decrement, removeItem, clearCart }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext)


