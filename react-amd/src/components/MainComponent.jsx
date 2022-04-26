import React, { useState } from 'react'
import { Grid, Button, IconButton, TextField } from "@mui/material"
import { GridViewRounded, RotateLeft } from "@mui/icons-material";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import WordTile from './WordTile'

import styles from "./MainComponent.module.css";
import reactLogo from "../assets/R.png";
import amdLogo from "../assets/amd.png";

const MainComponent = () => {
    const [wordInput, setWordInput] = useState("");
    const [wordList, setWordList] = useState([]);
    const [arranged, setArranged] = useState(false);

    // function to arrange an alphabetically sorted word list
    const arrangeSortedList = words => {
        const n = words.length;

        let numRows = 0;
        if(n % 4 === 0)
            numRows = n / 4;
        else numRows = parseInt(n / 4) + 1;

        let currIndex = 0;
        let arrangedList = new Array(n);
        let r = 0;
        while(currIndex < n) {
            let i = 0;
            for(i; i < numRows; i++) {
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
        if(wordInput.length === 0)
            return;

        const inputList = wordInput.split(" ")
                                   .map(word => word.toLowerCase())
                                   .sort()
                                   .map(word => word.charAt(0).toUpperCase() + word.substring(1))

        setWordList(arrangeSortedList(inputList.filter((word, i) => inputList.indexOf(word) === i)));
        setArranged(true);
    }

    // Empty the input string and the words list when 'Reset' is pressed
    const handleReset = () => {
        setWordInput("")
        setWordList([])
        setArranged(false);
    }

    // Remove the pressed word, sort the word list aplhabetically and re-arrange the words when a word is pressed
    const removeWord = word => {
        let newList = wordList.filter(ele => ele !== word);
        newList = newList.sort();

        if(newList.length === 0) {
            handleReset();
        } else setWordList(arrangeSortedList(newList));
    }

    // Call th handleArrange function when "Enter" key is pressed
    const handleEnter = e => {
      if (e.key === "Enter") {
        handleArrange();
      }
    };

  return (
    <div className={styles.main}>
        <div className={styles.inputButton}>
            <TextField 
                id="wordInput-basic" 
                label="Enter words separated by a space" 
                variant="outlined" 
                value={wordInput}
                onChange={e => setWordInput(e.target.value)} 
                onKeyDown={handleEnter} 
                style={{ width: "80%"}}
            />
            {
                arranged ? <Button variant="outlined" onClick={handleReset} startIcon={<RotateLeft />}>Reset</Button>
                        : <Button variant="contained" onClick={handleArrange} startIcon={<GridViewRounded />} disableElevation>Arrange</Button>
            }
        </div> 
        <Grid container spacing={4} style={{marginTop: "2%", height: "auto"}}>
            {
                wordList.map(word => {
                    return  <Grid 
                                key={word} item xs={3} 
                                style={{ padding: "16px", height: "150px"}}
                            >
                                <WordTile word={word} onRemove={removeWord}  />
                            </Grid>
                })
            }
        </Grid>
        <div className={styles.logos}>
            <img src={reactLogo} alt="ReactJS Logo" width="140px" />
            <img src={amdLogo} className={styles.amd} alt="AMD Logo" width="200px" />
        </div>
    </div>
  )
}

export default MainComponent