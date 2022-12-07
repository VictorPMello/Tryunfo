import { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div
        className="
        flex
        flex-col
        w-5/5
        bg-green-500
        rounded-lg
        p-3
        gap-3.5
        items-center
        border-8
        border-neutral-900
        max-w-sm
      "
      >
        <h1
          data-testid="name-card"
          className="
            text-5xl
            font-bold
            p-2
            rounded
            p-3
            w-full
        "
        >
          {cardName}
        </h1>

        <div className="flex justify-between flex-col w-full px-8">
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
            className="
            W-1/2
            h-full
            bg-white
            rounded-xl
          "
          />
          <div className="flex mt-3 justify-center gap-4 ">
            <p
              className="
                text-xl
                text-gray-900
                bg-white
                font-bold
                p-2
                rounded
              "
              data-testid="attr1-card"
            >
              Alquimia
              {' '}
              <span className="text-amber-500 font-normal">{cardAttr1}</span>
            </p>
            <p
              className="
                text-xl
                text-gray-900
                bg-white
                font-bold
                p-2
                rounded
               "
              data-testid="attr2-card"
            >
              Combate
              {' '}
              <span className="text-amber-500 font-normal">{cardAttr2}</span>

            </p>
            <p
              className="
                text-xl
                text-gray-900
                bg-white
                font-bold
                p-2
                rounded
              "
              data-testid="attr3-card"
            >
              Resistência
              {' '}
              <span className="text-amber-500 font-normal">{cardAttr3}</span>
            </p>
          </div>
        </div>

        <p
          data-testid="description-card"
          className="
            w-full
            h-40
            bg-white
            p-3
            text-center
            rounded
          "
        >
          {cardDescription}

        </p>

        <div className="flex w-full justify-around uppercase mt-4">
          <p data-testid="rare-card" className="text-white">{cardRare}</p>

          {cardTrunfo && (
            <strong
              data-testid="trunfo-card"
              className="text-purple-800"
            >
              Super Trunfo
            </strong>
          )}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
}.isRequired;

export default Card;
