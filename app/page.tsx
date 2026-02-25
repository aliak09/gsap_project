import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';
import About from './components/About';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <div className='h-dvh bg-black'></div>
    </main>
  )
}