import React, {useState} from 'react'
import { useTrail, animated as a } from '@react-spring/web'

const items = ["Item1", "Item2", "Item3", "Item4"];
const config = { mass: 5, tension: 2000, friction: 200 };
const Home = () => {

	const [toggle, set] = useState(true);
	const trail = useTrail(1, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

	return (
	<main 
	onClick={() => set(state => !state)}
	className='w-full h-[90vh] flex flex-col justify-center items-center'>
		{trail.map(({ x, height, ...rest }, index) => (
			<a.div>
				<a.div
            key={items[index]}
            className="trails-text"
						style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>
						<div className='bg-zinc-900 uppercase w-full'>
						  <h1 className='text-7xl sm:text-7xl lg:text-8xl font-extrabold text-white text-right'>Insights.</h1>
					  </div>
						<a.div style={{ height }} className='text-4xl flex flex-col font-extrabold text-right text-zinc-900'>
							<a.div style={{ height }}>Thoughts</a.div>
							<a.div style={{ height }}>Ideas</a.div>
							<a.div style={{ height }}>Experiences</a.div>
					</a.div>
						</a.div>
          </a.div>
			</a.div>
		))}
				
	</main>
	)
}

export default Home

{/* <div className='flex flex-col items-end w-2/3 sm:w-1/2 lg:w-3/6 space-x-5'>
					<div className='bg-zinc-900 uppercase w-full'>
						<h1 className='text-7xl sm:text-7xl lg:text-8xl font-extrabold text-white text-right'>Insights.</h1>
					</div>
					<div className='text-4xl flex flex-col font-extrabold text-right text-zinc-900'>
							<h3>Thoughts</h3>
							<h3>Ideas</h3>
							<h3>Experiences</h3>
					</div>
				</div> */}
