import { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import { Link } from 'react-router-dom' // ✅ Correct import

export default function ProductsItems({ id, image, name, price }) {
  const { currency } = useContext(ShopeContext)
  
  return (
    <div className="text-gray-700 cursor-pointer">
      <Link to={`/product/${id}`}>
        <div>
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt={name}
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  )
}               