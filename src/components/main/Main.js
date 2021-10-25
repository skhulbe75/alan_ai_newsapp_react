import React, {useState, useEffect} from "react";


import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from "../NewsCards/NewsCards";

import classes from "./Main.module.css"

const processedKey = process.env.REACT_APP_API_KEY;
const appendValue = '/stage'
const alanKey =  processedKey.concat(appendValue);



const Main = props => {

    
    const[ newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command, articles}) =>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
                }
            }

        })
    } ,[])

    return(
        <div className={classes.container}>
            <div className={classes.heading}>
                <h1 className={classes["heading-text-1"]}>Hi! my name is Alan,</h1>
                <h3 className={classes["heading-text-2"]}>I am your News Assistant</h3>
                <div className={classes.underline}>
                    <div className={classes["small-line"]}></div>
                    <div className={classes["big-line"]}></div>
                </div>
                <h6 className={classes.text}>Try saying: "Give me the latest news." after clicking on mic</h6>
            </div>
            
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />

        </div>
    )
};

export default Main;