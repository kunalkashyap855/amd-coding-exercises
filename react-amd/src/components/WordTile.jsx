import React from 'react'

import styles from "./WordTile.module.css";

const WordTile = ({ word, onRemove }) => {
  return (
    <div className={styles.tile} onClick={() => onRemove(word)}>{word}</div>
  )
}

export default WordTile