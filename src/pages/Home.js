import React, {useState} from 'react'
import { useTrail, animated as a } from '@react-spring/web'

const config = { mass: 5, tension: 900, friction: 200 };
const Home = () => {

	const [toggle, set] = useState(true);
	const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 40,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

	return (
	<main 
	onClick={() => set(state => !state)}
	className='w-full h-[80vh] flex flex-col justify-center items-center'>	
					{trail.map(({ height, ...style}) => (
		<div className='flex flex-col items-end w-2/3 sm:w-1/2 lg:w-3/6 space-x-5'>
             <a.div 
						 style={style}
						 className='bg-zinc-900 uppercase w-full'>
						 <a.div 
						 style={style}
						 className='text-7xl sm:text-7xl lg:text-8xl font-extrabold text-white text-right'>Insights.</a.div>
					 </a.div>
					<a.div  style={style} className='text-4xl flex flex-col font-extrabold text-right text-zinc-900'>
							<a.div style={{height}}>Thoughts</a.div>
							<a.div style={{height}} >Ideas</a.div>
							<a.div style={{height}} >Experiences</a.div>
					</a.div>
				</div> 
					))}
	</main>
	)
}

export default Home
