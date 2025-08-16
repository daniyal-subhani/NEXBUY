  "use client"

import Image from "next/image"
import { motion } from "framer-motion"

const MainBanner = () => {
  return (
    <motion.div className="relative aspect-[3/1] mb-12 mt-[72px] mx-auto overflow-hidden "
    initial={{ opacity: 0, scale: 0.95 }} // Initial animation state
    animate={{ opacity: 1, scale: 1 }} // Final/ending animation state
    transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration
    >
      <Image src="/featured.png" alt="Home Banner" className="object-cover" width={1180} height={640} priority/>
    </motion.div>
  )
}

export default MainBanner
