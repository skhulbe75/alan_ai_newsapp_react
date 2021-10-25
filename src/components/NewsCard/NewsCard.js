import React from 'react'

import classes from './NewsCard.module.css';

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i, activeArticle}) => {
   
    const activeCard = activeArticle === i ? classes.active : null;
    
   
    return (
        
        <div className={`${classes.card} ${activeCard}`}>
            <span href={url} target="_blank" className={classes.links}>
                <img className={classes.media} src={urlToImage || 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                    alt="image"
                />
                <div className={classes.details}>
                    <span>{(new Date(publishedAt)).toDateString()}</span>
                    <span>{source.name}</span>
                </div>
                <h5 className={classes.title}>{title}</h5>
                <div className={classes.description}>
                    <p>{description}</p>
                </div>
            </span>
            <span className={classes.btn}>Learn More</span>
            <span className={classes.index}>{i +1}</span>
        </div>
    )
}

export default NewsCard;
