import React, { useState, useEffect } from 'react'
import { SolutionType } from '../types/solution.type'

type MotdleProps = {
	solution: SolutionType
}

function useMotdle({ solution }: MotdleProps) {
	const [turn, setTurn] = useState(0)
	const [currentGuess, setCurrentGuess] = useState('')
	const [guesses, setGuesses] = useState([])
	const [history, setHistory] = useState([] as String[])
	const [isCorrect, setIsCorrect] = useState(false)

	const formatGuess = () => {
		console.log('formatting the current guess - ' + currentGuess)
	}

	const addNewGuess = () => {}

	const handleKeyup = ({ key }: KeyboardEvent) => {
		// Submitting
		if (key === 'Enter') {
			if (turn > 5) {
				console.log('Tu as utilisé tous tes tours')
				return
			}

			if (history.includes(currentGuess)) {
				console.log('Tu as déjà essayé ce mot')
				return
			}

			if (currentGuess.length !== 5) {
				console.log('Le mot doit avoir 5 caractères')
				return
			}

			formatGuess()
		}

		// Backspace to erase
		if (key === 'Backspace') {
			setCurrentGuess((prev) => prev.slice(0, -1))
			return
		}

		// Guess submit
		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => prev + key)
			}
		}
	}

	return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useMotdle
