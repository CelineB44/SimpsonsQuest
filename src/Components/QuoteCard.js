import React from 'react';

function QuoteCard(props) {
  return (
    <figure className="QuoteCard">
      <img src={props.quote.image} alt={props.quote.character} />
      <figcaption>
        <blockquote>{props.quote.quote}</blockquote>
        <cite>{props.quote.character}</cite>
      </figcaption>
    </figure>
  );
}

export default QuoteCard;
