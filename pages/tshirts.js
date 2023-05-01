import Link from "next/link";
import mongoose from "mongoose";
import Product from "@/models/Product";
const Tshirts = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {return <Link key={item._id}
              className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer md:shadow-md m-4 hover:shadow-2xl hover:duration-700"
              href={`/product/${item.slug}`}
            >
              <div>
                <img
                  alt="ecommerce"
                  className="m-auto my-0  h-[30vh] md:h-[40vh] block py-10"
                  src="https://m.media-amazon.com/images/I/716+FjQc0UL._AC_UL1500_.jpg"
                />
                <div className="mt-0 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {item.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p className="mt-1">${item.price}</p>
                  <p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </div>
            </Link>})}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();
  products =JSON.parse(JSON.stringify(products));

  return {
    props: { products },
  };
}
export default Tshirts;
