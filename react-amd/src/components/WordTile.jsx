import React from 'react'
import { Paper } from "@mui/material";

import styles from "./WordTile.module.css";

const WordTile = ({ word, onRemove }) => {
  return (
    <Paper elevation={2} className={styles.tile} onClick={() => onRemove(word)}><strong>{word}</strong></Paper>
  )
}

export default WordTile