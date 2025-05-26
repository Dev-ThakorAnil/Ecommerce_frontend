import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopeContext } from "../context/ShopeContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

export default function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopeContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0">Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Image Section */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                alt={`Thumbnail ${index}`}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border hover:border-black"
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Info */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3x1 font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description and review */}

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text-sm text-gray-500">
          <p>
            An E-commerce website is Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus, voluptatum? Quod id ex optio ipsa
            assumenda reiciendis placeat officia ab, aliquid quia voluptatum
            fugiat. Aspernatur illo explicabo quo facere corporis.
          </p>
          <p>
            E-commerce website typically display Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus, voluptatum? Quod id ex
            optio ipsa assumenda reiciendis placeat officia ab, aliquid quia
            voluptatum fugiat. Aspernatur illo explicabo quo facere corporis.
          </p>
        </div>
      </div>
            {/* display related products... */}

            <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  );
}
