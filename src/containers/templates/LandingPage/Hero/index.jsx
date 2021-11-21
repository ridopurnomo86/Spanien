import React, {
} from 'react'

const Hero = () => (
  <div
    className="w-full h-herosize bg-no-repeat mb-24"
    style={{
      background: 'linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url("https://source.unsplash.com/ouepMRhnknE/2054x1072")',
    }}
  >
    <div className="flex flex-col w-full h-full items-center justify-center">
      <p className="text-white font-semibold text-6xl md:text-8xl">Bienvenido.</p>
      <p className="text-gray-300 font-semi text-base w-6/12 text-center mt-2 md:text-xl">saving much time by finding you favorite apartements. Let’s explore what an apartment is and who is best suited for apartment-style living.</p>
    </div>
  </div>
)
export default Hero
