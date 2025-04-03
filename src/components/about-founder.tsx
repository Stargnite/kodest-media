import Link from "next/link"
import { ArrowRight} from "lucide-react"
import Image from "next/image"
import founderImg from "@/assets/founderImg.jpeg"

const AboutFounder = () => {
	return (
		<section className="py-16 md:py-24 bg-white text-gray-900">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
				<div className="relative aspect-square w-full max-w-md mx-auto md:max-w-none overflow-hidden order-2 md:order-1">
					<Image src={founderImg} alt="CEO Portrait" fill className="object-cover" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
				</div>
				<div className="space-y-6 order-1 md:order-2">
					<h2 className="text-2xl md:text-3xl font-light tracking-tight">Meet Our Founder</h2>
					<h3 className="text-xl font-light  text-gray-900">Kodest Tee</h3>
					<div className="w-24 h-0.5 bg-black"></div>
					<p className="text-gray-900 leading-relaxed text-sm md:text-base">
						With over 15 years of experience in photography, Kodest has built a reputation for capturing moments
						that tell powerful stories. His unique vision and technical expertise have made KODEST Studio a premier
						destination for those seeking exceptional photography.
					</p>
					<p className="leading-relaxed text-sm md:text-base text-gray-900">
						Photography is not just about taking pictures; it&apos;s about preserving emotions, telling stories, and
						creating art that stands the test of time.
					</p>
					<div className="pt-4">
						<Link
							href="#collections"
							className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
						>
							View our work <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default AboutFounder
