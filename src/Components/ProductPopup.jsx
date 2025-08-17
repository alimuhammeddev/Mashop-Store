import { X } from "lucide-react";

const ProductPopup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-3 rounded-lg shadow-lg w-[350px]">

        <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md" />

        <h1 className="text-lg font-medium mt-4">{product.name}</h1>
        <p className="text-orange-500 text-base">Price: {product.price}</p>
        <p className="text-gray-400 line-through">Discount: {product.discount}</p>

        <button className="mt-4 w-full bg-orange-400 text-white py-2 rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductPopup;