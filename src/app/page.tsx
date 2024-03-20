"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/ui/gemini-effect";
import { BelowHoverComponent } from "@/components/below-hover-component";

import { AnimatedTooltipPreview } from "@/components/Meet-people";
import { BackgroundBeamsDemo } from "@/components/Stars";

export default function Home () {
    const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);


	return (
		<main>
			<div
				className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
				ref={ref}>
				<GoogleGeminiEffect
					pathLengths={[
						pathLengthFirst,
						pathLengthSecond,
						pathLengthThird,
						pathLengthFourth,
						pathLengthFifth,
					]}
				/>
			</div>

			<BelowHoverComponent />
			<div className="text-5xl font-bold flex  flex-col  items-center gap-10">
				Obsessive  team of Developers
				<AnimatedTooltipPreview />

			</div>
			<BackgroundBeamsDemo/>
		</main>
	);
}
