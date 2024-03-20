"use client";
import React from "react";
import { BackgroundBeams } from "@/ui/background-beams";

export function BackgroundBeamsDemo() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					Join the waitlist
				</h1>
				<p></p>
				<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
					We are working hard to bring you the best experience. Sign up to get
					early access to our platform.
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur hic dicta, repudiandae amet excepturi molestias itaque doloremque magnam, porro natus nostrum, neque vero veritatis assumenda deserunt corrupti quia! Nostrum, officia!
				</p>
				<input
					type="text"
					placeholder="hi@manuarora.in"
					className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700  h-20 text-xl  p-2"
				/>
			</div>
			<BackgroundBeams />
		</div>
	);
}
