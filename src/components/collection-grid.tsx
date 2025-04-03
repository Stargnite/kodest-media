"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import potrait1 from "@/assets/potraits/potrait1.jpg"
import potrait2 from "@/assets/potraits/potrait2.jpg"
import potrait3 from "@/assets/potraits/potrait3.jpg"
import potrait4 from "@/assets/potraits/potrait4.jpg"
import potrait5 from "@/assets/potraits/potrait5.jpg"
import potrait6 from "@/assets/potraits/potrait6.jpg"
import potrait7 from "@/assets/potraits/potrait7.jpg"
import potrait8 from "@/assets/potraits/potrait8.jpg"

import weddingsImg1 from "@/assets/weddingsImgs/weddingsImg1.jpg"
import weddingsImg2 from "@/assets/weddingsImgs/weddingsImg2.jpg"
import weddingsImg3 from "@/assets/weddingsImgs/weddingsImg3.jpg"
import weddingsImg4 from "@/assets/weddingsImgs/weddingsImg4.jpg"
import weddingsImg5 from "@/assets/weddingsImgs/weddingsImg5.jpg"
import weddingsImg6 from "@/assets/weddingsImgs/weddingsImg6.jpg"

import fashionImg1 from "@/assets/fashionImgs/fashionImg1.jpg"
import fashionImg2 from "@/assets/fashionImgs/fashionImg2.jpg"
import fashionImg3 from "@/assets/fashionImgs/fashionImg3.jpg"
import fashionImg4 from "@/assets/fashionImgs/fashionImg4.jpg"
import fashionImg5 from "@/assets/fashionImgs/fashionImg5.jpg"
import fashionImg6 from "@/assets/fashionImgs/fashionImg6.jpg"

import commercialImg1 from "@/assets/commercialImgs/commercialImg1.jpg"
import commercialImg2 from "@/assets/commercialImgs/commercialImg2.jpg"
import commercialImg3 from "@/assets/commercialImgs/commercialImg3.jpg"
import commercialImg4 from "@/assets/commercialImgs/commercialImg4.jpg"
import commercialImg5 from "@/assets/commercialImgs/commercialImg5.jpg"
import commercialImg6 from "@/assets/commercialImgs/commercialImg6.jpg"

const collections = [
	{
		id: "portraits",
		title: "Portraits",
		description: "Capturing personality and emotion in every frame",
		images: [
			potrait1,
			potrait2,
			potrait3,
			potrait4,	
			potrait5,
			potrait6,
			potrait7,
			potrait8,
				],
	},
	{
		id: "weddings",
		title: "Weddings",
		description: "Documenting your special day with elegance and style",
		images: [
			weddingsImg1,
			weddingsImg2,
			weddingsImg3,
			weddingsImg4,
			weddingsImg5,
			weddingsImg6,
		],
	},
	{
		id: "fashion",
		title: "Fashion",
		description: "Bold, creative imagery for fashion and editorial",
		images: [
			fashionImg1,
			fashionImg2,
			fashionImg3,
			fashionImg4,
			fashionImg5,
			fashionImg6,
		],
	},
	{
		id: "commercial",
		title: "Commercial",
		description: "Professional photography for brands and businesses",
		images: [
			commercialImg1,
			commercialImg2,
			commercialImg3,
			commercialImg4,
			commercialImg5,
			commercialImg6,
		],
	},
]

export default function CollectionGrid() {
	const [activeCollection, setActiveCollection] = useState(collections[0].id)
	const [hoveredImage, setHoveredImage] = useState<number | null>(null)
	const isMobile = useMobile()

	const currentCollection = collections.find((c) => c.id === activeCollection)

	return (
		<div className="space-y-8 md:space-y-12">
			{/* Collection tabs - Scrollable on mobile */}
			<div className="flex overflow-x-auto pb-2 md:pb-0 md:flex-wrap justify-start md:justify-center gap-2 md:gap-8 hide-scrollbar">
				{collections.map((collection) => (
					<button
						key={collection.id}
						onClick={() => setActiveCollection(collection.id)}
						className={`px-4 md:px-6 py-2 md:py-3 text-sm uppercase tracking-widest transition-all whitespace-nowrap ${activeCollection === collection.id ? "bg-black text-white" : "bg-transparent text-black hover:bg-black/5"
							}`}
					>
						{collection.title}
					</button>
				))}
			</div>

			{/* Collection description */}
			<div className="text-center max-w-2xl mx-auto px-4">
				<motion.p
					key={activeCollection}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-base md:text-lg"
				>
					{currentCollection?.description}
				</motion.p>
			</div>

			{/* Collection images - Responsive dynamic layout */}
			<motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
				{currentCollection?.images.slice(0, 6).map((image, index) => {
					// Create different layouts based on index, but simplify on mobile
					const isLarge = !isMobile && (index === 0 || index === 5)
					const isWide = !isMobile && (index === 1 || index === 4)
					const isTall = !isMobile && (index === 2 || index === 3)

					// Determine grid span classes based on layout type and screen size
					const gridClasses = isMobile
						? index % 3 === 0
							? "col-span-2 aspect-video"
							: "aspect-square"
						: isLarge
							? "md:col-span-2 md:row-span-2 aspect-square"
							: isWide
								? "md:col-span-1 aspect-video"
								: isTall
									? "md:row-span-2 aspect-[3/4]"
									: "aspect-square"

					return (
						<motion.div
							key={`${activeCollection}-${index}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`relative overflow-hidden ${gridClasses}`}
							onMouseEnter={() => setHoveredImage(index)}
							onMouseLeave={() => setHoveredImage(null)}
						>
							<Image
								src={image || "/placeholder.svg"}
								alt={`${currentCollection.title} image ${index + 1}`}
								fill
								className="object-cover transition-transform duration-700 ease-out"
								style={{
									transform: hoveredImage === index ? "scale(1.05)" : "scale(1)",
								}}
							/>
							<div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
						</motion.div>
					)
				})}
			</motion.div>
		</div>
	)
}

