import { useCartStore } from "@/stores/cartStore";
import { Trash } from "lucide-react";
import Image from "next/image";

const CartProducts = () => {
    const {cart} = useCartStore();
  return (
    <div className="container mx-auto p-4 border-1">
    {
        cart.map((item)=> (
            <div className="">
                <div>
                    <Image src={item.images[item.selectedOptions.color]} alt={item.name} width={100} height={100} />
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <button className="mt-2 text-blue-600 hover:underline">
                    <Trash className="h-4 w-4" color="red"/>
                </button>
            </div>
        ))
    }
    </div>
  )
}

export default CartProducts
