/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useState } from "react";

type Player = "X" | "O";
let nextPlayer: Player;

const useGameState = () => {
  // Iniciar os estados padrões
  const [stepNumber, setStepNumber] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [currentBoard, setCurrentBoard] = useState<(Player | null)[]>(
    Array(9).fill(null)
  );

  const computeMove = (squareId: any) => {
    currentBoard[squareId] = currentPlayer;

    if (currentPlayer === "X") {
      nextPlayer = "O";
    } else {
      nextPlayer = "X";
    }

    // Alterando os estados conforme cada jogada acontece
    setCurrentBoard(currentBoard);
    setCurrentPlayer(nextPlayer);
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  };

  // Função para restaurar valores padrões
  const restartGame = () => {
    setStepNumber(0);
    setCurrentBoard(Array(9).fill(null));
  };

  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    restartGame
  };
};

export default useGameState;
