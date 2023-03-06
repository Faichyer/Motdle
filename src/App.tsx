import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App text-center text-base font-quicksand">
			<h1 className="text-xl px-5 border-b-2 border-b-slate-100 text-gray-500">
				Motdle
			</h1>
		</div>
	)
}

export default App
