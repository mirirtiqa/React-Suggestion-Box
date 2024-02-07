import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Trie, createTrie } from './trie';
import { useEffect } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';
import { Button } from '@mui/material';

const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {
      count: '20',
      wordLength: '6'
    },
    headers: {
      'X-RapidAPI-Key': 'b00ddbd1bemsh41b2dac8d6a0b09p194933jsn23a135586680',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };

export default function Search(){
    const privateHistory = [];
    // function getInitialData(){
    //     const data = JSON.parse(localStorage.getItem("localwords"));
    //     if (!data) return [];
    //     return data;
    //  }

    //  useEffect(()=>{
    //     localStorage.setItem("localwords",JSON.stringify(privateHistory));
    // },[privateHistory]);

    const [search, setSearch] = React.useState('');
    const [suggestions, setSuggestions] = React.useState([]);
    const [words, setWords] = React.useState([]);
    const [typing, setTyping] = React.useState(false);
    // const [trie, setTrie] = React.useState(new Trie());
   
    const trie = createTrie(words);
    useEffect(() => {
       const results = trie.getSuggestions(search);
       setSuggestions(results);
    }, [search]);

    useEffect(function fetchData(){
        async function fetchWords() {
            
                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                    const words = response.data;
                    setWords(words);
                } catch (error) {
                    console.error(error);
                }
          }
          fetchWords();
    }, []);



    function handleChange(event) {
        setSearch(event.target.value);
        setTyping(true);
    }
    function handleSuggestedWordClick(word){
        setSearch(word);
        setTyping(false);
    }
    function handleButtonClick(){
        // if (!words.includes(search)){
        // setTrie((prev) => {
        //     const newTrie = prev.insert(search);
        //     return newTrie;
        
        // });
        privateHistory.push(search);
    }


    return (
        <>
        <h1>Search Away...I got your back!</h1>
        <TextField id="word" label="search" variant="outlined" value={search} onChange={handleChange}/> 
        <br/>
        <Button style = {{margin : 3}} variant="contained" onClick={handleButtonClick}>Search</Button>
        {(search!=='' && typing) && <Suggestions suggestions={suggestions} onclick={handleSuggestedWordClick}/>}
        </>
      );
    }
