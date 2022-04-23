import React, { useState } from 'react'
import { Grid } from "@mui/material"

import WordTile from './WordTile'

const MainComponent = () => {
    const [wordInput, setWordInput] = useState("");
    const [wordList, setWordList] = useState([]);

    const handleArrange = () => {
        const inputList = wordInput.split(" ").sort()
        const inputLen = inputList.length;

        let currIndex = 0;
        let arrangedList = new Array(inputLen);
        let r = 0;
        while(currIndex < inputLen) {
            let i = 0;
            for(i; i < 3; i++) {
                if((r + (4 * i)) >= inputLen) {
                    break;
                }
                arrangedList[r + (4 * i)] = inputList[currIndex + i];
            }
            currIndex += i;
            r += 1;
        }

        setWordList(arrangedList);
    }

    const handleReset = () => {
        setWordInput("")
        setWordList([])
    }

    const removeWord = word => {
        setWordList(prevValue => prevValue.filter(ele => ele !== word));
    }

    const handleEnter = e => {
        //it triggers by pressing the enter key
      if (e.key === "Enter") {
        handleArrange();
      }
    };

  return (
    <div>
        <input name='wordInput' value={wordInput} onChange={e => setWordInput(e.target.value)} onKeyDown={handleEnter} />
        <button onClick={handleArrange}>Arrange</button>
        <button onClick={handleReset}>Reset</button>
        <Grid container spacing={4}>
            {
                wordList.map(word => <Grid key={word} item xs={3} onClick={() => removeWord(word)}><WordTile word={word} /></Grid>)
            }
        </Grid>
    </div>
  )
}

export default MainComponent