import React, { useState } from 'react'
import { Paper } from "@mui/material";

import styles from "./WordTile.module.css";

const WordTile = ({ word, onRemove }) => {
  const [fadingOutWord, setFadingOutWord] = useState("");

  const handleRemove = w => {
    setFadingOutWord(w)
    setTimeout(() => {
      onRemove(w);
    }, 400)
  }

  return (
    <Paper elevation={2} className={fadingOutWord === word ? styles.tileFadeOut : styles.tile} onClick={() => handleRemove(word)}>
      <strong>{word}</strong>
    </Paper>
  )
}

export default WordTile