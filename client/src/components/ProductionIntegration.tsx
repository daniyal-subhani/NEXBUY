"use client"

import { useState } from "react"

type ProductOptionsProps = {
onChange: (options: {size: string, color: string, quantity: number}) => void
}

export default function ProductionIntegration({onChange}: ProductOptionsProps) {
   const [selectedSize, setSelectedSize] = useState("")
   const [color, setColor] = useState("")
   const [quantity, setQuantity] = useState(1)
  return (
    <div>

    </div>
  )
}
