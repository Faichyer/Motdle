import React, { useEffect } from 'react'
import useMotdle from '../hooks/useMotdle'
import { SolutionType } from '../types/solution.type'

type MotdleProps = {
	solution: SolutionType
}

function Motdle({ solution }: MotdleProps) {
	const { currentGuess, handleKeyup } = useMotdle({ solution })

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup)

		return () => window.removeEventListener('keyup', handleKeyup)
	}, [handleKeyup])

	return (
		<div>
			<div>Solution is: {solution.word}</div>
			<div>Current guess is: {currentGuess}</div>
		</div>
	)
}

export default Motdle
