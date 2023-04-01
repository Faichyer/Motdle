import React, { useState, useEffect } from 'react'
import { SolutionType } from '../types/solution.type'

type MotdleProps = {
	solution: SolutionType
}

function useMotdle({ solution }: MotdleProps) {
	const [turn, setTurn] = useState(0)
	const [currentGuess, setCurrentGuess] = useState('')
	const [guesses, setGuesses] = useState([])
	const [history, setHistory] = useState([])
	const [isCorrect, setIsCorrect] = useState(false)

	const formatGuess = () => {}

	const addNewGuess = () => {}

	const handleKeyup = ({ key }: KeyboardEvent) => {
		if (key === 'Enter') {
		}

		if (key === 'Backspace') {
			setCurrentGuess((prev) => prev.slice(0, -1))
			return
		}

		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => prev + key)
			}
		}
	}

	return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useMotdle
