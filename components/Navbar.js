import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const check = Object.keys(cart);
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="py-3 flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-xl">
      <Link href={"/"} className="logo mx-5">
        <Image src="/logo-1.png" alt="band img" width={100} height={40} />
      </Link>
      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-sm">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-4 mx-5 flex cursor-pointer"
      >
        <AiOutlineShoppingCart className="text-2xl md:text-3xl" />
        <span className="border-2 rounded-full border-indigo-600 text-xs leading-3 h-5 p-px">
          10
        </span>
      </div>
      <div
        ref={ref}
        className="w-72 h-full sideCart py-5 px-8 absolute top-0 right-0 bg-pink-100 transform transition-transform translate-x-full "
      >
        <h2 className="font-bold text-xl text-center pb-2">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute cursor-pointer top-4 right-3 md:text-2xl text-pink-400"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="font-bold">Your cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex">
                  <div className="w-2/3 text-semibold">{cart[k].name}</div>
                  <div className="w-1/3 text-semibold flex items-center justify-center">
                    <AiOutlinePlus className="mr-2 cursor-pointer text-xm border-2 border-pink-400 rounded-full " />
                    {cart[k].qty}
                    <AiOutlineMinus className="ms-2 text-xm border-2 border-pink-400 rounded-full cursor-pointer" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex justify-center pt-4">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-ms mr-2">
            <BsFillBagCheckFill className="mr-2 mt-1" /> Checkout
          </button>
          <button
            onClick={clearCart}
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-ms mr-2"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;