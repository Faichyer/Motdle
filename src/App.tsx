import { useEffect, useState } from 'react'
import Motdle from './components/Motdle'

function App() {
	const [solution, setSolution] = useState(null)

	useEffect(() => {
		fetch('http://localhost:3001/solutions')
			.then((res) => res.json())
			.then((json) => {
				const randomSolution =
					json[Math.floor(Math.random() * json.length)]

				setSolution(randomSolution)
			})
	}, [])

	return (
		<div className="App text-center text-base font-quicksand">
			<h1 className="text-2xl px-5 border-b-2 border-b-slate-100 text-gray-800">
				Motdle
			</h1>
			{solution && <Motdle solution={solution} />}
		</div>
	)
}

export default App
