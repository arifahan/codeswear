const Order = () => {
  return <div><section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWARE.COM</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4"> Oder ID: #8812770</h1>

        <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
        <div className="flex border-gray-200 py-2 justify-between">
          <span className=" text-gray-900">Item Description</span>
          <span className="ml-20 text-gray-900">Quantity</span>
          <span className=" text-gray-900">Price Total</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Ware the Code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">$499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Ware the Code (XL/Black)</span>
          <span className="ml-auto text-gray-900">2</span>
          <span className="ml-auto text-gray-900">$499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Ware the Code (XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">$499</span>
        </div>

        <div>
          <div className="title-font font-medium text-2xl text-gray-900">$58.00</div>
          <button className="ml-auto mt-4 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>

        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
    </div>
  </div>
</section></div>;
};

export default Order;
