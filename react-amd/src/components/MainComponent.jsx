import React, { useState } from 'react'
import { Grid } from "@mui/material"

import WordTile from './WordTile'

import styles from "./MainComponent.module.css";

const MainComponent = () => {
    const [wordInput, setWordInput] = useState("");
    const [wordList, setWordList] = useState([]);

    // function to arrange an alphabetically sorted word list
    const arrangeSortedList = words => {
        const n = words.length;

        let currIndex = 0;
        let arrangedList = new Array(n);
        let r = 0;
        while(currIndex < n) {
            let i = 0;
            for(i; i < 3; i++) {
                if((r + (4 * i)) >= n) {
                    break;
                }
                arrangedList[r + (4 * i)] = words[currIndex + i];
            }
            currIndex += i;
            r += 1;
        }

        return arrangedList;
    }

    // Split the string into an array of words, sort them alphabetically and arrange them when 'Arrange' is pressed
    const handleArrange = () => {
        const inputList = wordInput.split(" ").sort()
        setWordList(arrangeSortedList(inputList));
    }

    // Empty the input string and the words list when 'Reset' is pressed
    const handleReset = () => {
        setWordInput("")
        setWordList([])
    }

    // Remove the pressed word, sort the word list aplhabetically and re-arrange the words when a word is pressed
    const removeWord = word => {
        let newList = wordList.filter(ele => ele !== word);
        newList = newList.sort();

        setWordList(arrangeSortedList(newList));
    }

    // Call th handleArrange function when "Enter" key is pressed
    const handleEnter = e => {
      if (e.key === "Enter") {
        handleArrange();
      }
    };

  return (
    <div className={styles.main}>
        <input 
            name='wordInput' 
            value={wordInput} 
            onChange={e => setWordInput(e.target.value)} 
            onKeyDown={handleEnter} 
        />
        <div>
            <button onClick={handleArrange}>Arrange</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        <Grid container spacing={4} style={{ border: "1px solid #b9b9b9d4", marginTop: "2%", height: "auto"}}>
            {
                wordList.map(word => {
                    return  <Grid 
                                key={word} item xs={3} 
                                style={{ padding: "16px", height: "auto", borderBottom: "1px solid #b9b9b9d4", borderRight: "1px solid #b9b9b9d4"}}
                            >
                                <WordTile word={word} onRemove={removeWord}  />
                            </Grid>
                })
            }
        </Grid>
    </div>
  )
}

export default MainComponent