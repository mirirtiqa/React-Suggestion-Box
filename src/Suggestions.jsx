


export default function Suggestions({suggestions, onclick}){


    return(
        <>
        <ul style={{listStyleType:"none"}}>
            {suggestions.map((word, idx) => <li key={idx} onClick={()=>{
                onclick(word);
            }}>{word}</li>)}
        </ul>

        </>
    );
}