import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function page() {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='flex-center text-4xl text-indigo-300'>Helo GSAP!</h1>
    </div>
  )
}
