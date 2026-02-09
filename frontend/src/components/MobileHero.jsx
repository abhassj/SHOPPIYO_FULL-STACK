import React, { useContext } from 'react'
import { assets } from '../assets/assets'
// Direct imports for specific assets if needed, or use assets object if they are structured there
// Based on assets.js, some images might need direct import if not exported in the main object
// But assets object seems to have categories. Let's use what's available or placeholders if needed.
// Actually, looking at assets.js, `products` array has the images. 
// I will just use the main `assets` for logo etc, and hardcode some nice images from the public or import them.
// Since I can't easily see the file structure of subfolders in one go, I'll assume standard imports or use the ones I saw in assets.js

// To be safe and quick, I will use the products logic to get images if possible, 
// OR better, I will just import the specific images I saw in assets.js to ensure they work.

import s_img2 from '../assets/stationery/s_img2.png' // Marble Desk Organizer
import s_img1 from '../assets/stationery/s_img1.png' // Notebook
import d_img4 from '../assets/drinkware/d_img4.png' // Ceramic Mug
import l_img2 from '../assets/lighting/l_img2.png' // Galaxy Lamp (looks cool)
import h_img12 from '../assets/home_decor/h_img12.png' // Wall Collage

const MobileHero = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-gray-50">
      
      {/* BACKGROUND COLLAGE - Fills the screen */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-2 p-2 opacity-90">
            {/* Top Left - Large */}
            <div className="row-span-2 relative rounded-xl overflow-hidden shadow-sm animate-fade-in delay-100">
                <img src={s_img2} alt="Organizer" className="w-full h-full object-cover" />
            </div>
            
            {/* Top Right */}
            <div className="relative rounded-xl overflow-hidden shadow-sm animate-fade-in delay-200">
                 <img src={h_img12} alt="Decor" className="w-full h-full object-cover" />
            </div>

            {/* Middle Right */}
            <div className="relative rounded-xl overflow-hidden shadow-sm animate-fade-in delay-300">
                 <img src={d_img4} alt="Mug" className="w-full h-full object-cover" />
            </div>

             {/* Bottom Left */}
             <div className="relative rounded-xl overflow-hidden shadow-sm animate-fade-in delay-400">
                <img src={l_img2} alt="Lamp" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Right */}
            <div className="relative rounded-xl overflow-hidden shadow-sm animate-fade-in delay-500">
                 <img src={s_img1} alt="Notebook" className="w-full h-full object-cover" />
            </div>
      </div>

      {/* GRADIENT OVERLAY - For readability at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

      {/* CONTENT CARD - Floating at bottom */}
      <div className="absolute bottom-20 left-4 right-4 z-10 animate-slide-up delay-500">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-xl text-center">
             <p className="text-xl font-serif text-white italic leading-relaxed tracking-wide drop-shadow-md">
                "Style is a way to say who you are without having to speak."
            </p>
            <p className="mt-3 text-[10px] text-white/80 uppercase tracking-widest font-semibold drop-shadow-sm">
                — Rachel Zoe
            </p>
            
            <button className="mt-6 w-full py-3 bg-white text-black text-xs font-bold tracking-[0.2em] rounded-full hover:bg-gray-100 transition-all uppercase shadow-lg">
                Shop Collection
            </button>
        </div>
      </div>

    </div>
  )
}

export default MobileHero
