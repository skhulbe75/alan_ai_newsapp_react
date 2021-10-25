import React from 'react';

import classes from "./NewsCards.module.css"
import NewsCard from "../NewsCard/NewsCard"

const infoCards = [
    { color: '#00838f', title: 'Latest News', info: 'News from best sources', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
  
  const NewsCards = ({ articles, activeArticle }) => {
    
  if (!articles.length) {
    return(
		<div className={classes.container}>
			{infoCards.map((infoCard) => (
					<div className={classes.card} style={{ backgroundColor: infoCard.color }}>
						<h5>{infoCard.title}</h5>
						{infoCard.info ? <h6><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</h6> : null}
						<h6>Try saying: <br /> <i>{infoCard.text}</i></h6>
					</div>
			))}
		</div>
	 )
  }
  
    return (
      <div className={classes["container-1"]}>
          {articles.map((article, i) => (
              <NewsCard activeArticle={activeArticle} i={i} article={article} />
          ))}
        </div>
    );
  };
  

export default NewsCards;