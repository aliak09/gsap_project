import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';
import About from './components/About';
import Art from './components/Art';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
      <Art/>
      <div className='h-dvh bg-black'></div>
    </main>
  )
}