"use client"
import { Input } from "./ui/input"

const SearchBar = () => {
  return (
    <div>
      <Input placeholder="Search..." className="rounded-md border border-gray-300 p-2 w-[250px]"  />
    </div>
  )
}

export default SearchBar
