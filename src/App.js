import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Filter from './components/Filter';
import Form from './components/Form';

import cards from './data/cards';

import './index.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardsArray: cards,
    //! criar array com cartas ,
    filterName: '',
    filterRariry: 'todas',
    filterTrunfo: false,
    shuffleArray: [],
    nextCard: 0,
    idxArray: 0,
  };

  validateField = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxNumber = 90;
    const sumNumber = 210;

    const validate = cardName
      && cardDescription
      && cardImage
      && Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxNumber
      && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxNumber
      && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxNumber
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sumNumber;

    this.setState({
      isSaveButtonDisabled: !(validate),
    });
  };

  onInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState(
      {
        [name]: value,
      },
      this.validateField,
    );
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevCard) => ({ cardsArray: [...prevCard.cardsArray, newCard] }));
    this.setState({ ...INITIAL_STATE });
  };

  handleClick = (name, cardTrunfo) => {
    const { cardsArray } = this.state;

    if (cardTrunfo) {
      const removeTrunfo = cardsArray.filter((card) => card.cardTrunfo !== cardTrunfo);
      this.setState({
        cardsArray: [...removeTrunfo],
        hasTrunfo: false,
        cardTrunfo: false,
      });
    } else {
      const removeCardByName = cardsArray.filter((card) => card.cardName !== name);
      this.setState({ cardsArray: [...removeCardByName] });
    }
  };

  handleFilterName = ({ target: { value } }) => { this.setState({ filterName: value }); };

  handleFilterRarity = ({ target: { value } }) => {
    this.setState({ filterRariry: value });
  };

  handleFilterTrunfo = ({ target: { checked } }) => {
    this.setState({ filterTrunfo: checked });
  };

  shuffleCards = (arr) => {
    const num = 0.5;
    const newArray = [...arr];
    const shuffle = newArray.sort(() => Math.random() - num);
    const idxArray = shuffle.length;

    this.setState({
      shuffleArray: [...shuffle],
      idxArray,
    });
  };

  nextCard = (num) => { this.setState((prev) => ({ nextCard: prev.nextCard + num })); };

  reloadGame = (arr) => {
    this.setState({ nextCard: 0 });
    this.shuffleCards(arr);
  };

  render() {
    const { ...state } = this.state;
    const {
      cardsArray,
      filterName,
      filterRariry,
      filterTrunfo,
      shuffleArray,
      nextCard,
      idxArray,
    } = this.state;

    return (
      <div
        className="flex flex-col justify-center
       items-center w-full p-3.5 gap-12 text-center mt-4"
      >
        <h1 className="text-5xl text-white">Tryunfo</h1>
        <div className="flex justify-between gap-3 w-full">
          <Form
            { ...state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card { ...state } />
        </div>

        <Filter
          filterTrunfo={ filterTrunfo }
          handleFilterName={ this.handleFilterName }
          handleFilterRarity={ this.handleFilterRarity }
          handleFilterTrunfo={ this.handleFilterTrunfo }
        />

        <div className="flex flex-wrap gap-8 justify-center">
          {cardsArray
            .filter(({ cardName }) => cardName.includes(filterName))
            .filter(({ cardName, cardRare }) => (cardRare === filterRariry && cardName)
              || (filterRariry === 'todas' && cardName))
            .filter((card) => (filterTrunfo ? card.cardTrunfo : card))
            .map((card) => (
              <div key={ card.cardName }>
                <Card { ...card } />
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={ () => this.handleClick(card.cardName, card.cardTrunfo) }
                  className=" mt-4 bg-red-600
                    text-white hover:bg-red-500
                    p-2 rounded-xl
                    ease-in-out duration-300
                  "
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>

        <div>
          <Button text="Jogar" myFunc={ () => this.shuffleCards(cardsArray) } />

          <Button
            text="Próxima carta"
            myFunc={ () => this.nextCard(1) }
          />
          {idxArray
            ? ((idxArray === nextCard) && (
              <Button
                text="Jogar novamente!"
                myFunc={ () => this.reloadGame(cardsArray) }
              />
            )) : null}

          <div className="mt-4">
            {shuffleArray
              .filter((arr, idx) => idx === nextCard)
              .map((card) => <Card key={ card.cardName } { ...card } />)}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
