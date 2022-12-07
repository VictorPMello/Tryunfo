import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form
        onSubmit={ onSaveButtonClick }
        className="
        flex
        flex-col
        bg-gray-300
        w-full
        rounded-lg
        p-3
        gap-3.5
        "
      >
        <label className="text-xl" htmlFor="name">
          Nome
          <input
            className="w-full rounded pl-2"
            type="text"
            name="cardName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label className="text-xl" htmlFor="description">
          Descrição
          <textarea
            className="w-full rounded pl-2 resize-none"
            type="text"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>

        <fieldset className="flex justify-center gap-8">
          <label className="text-xl" htmlFor="attr1">
            Alquimia
            <input
              className="w-full rounded pl-2 text-center"
              type="number"
              name="cardAttr1"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              data-testid="attr1-input"
            />
          </label>

          <label className="text-xl" htmlFor="attr2">
            Combate
            <input
              className="w-full rounded pl-2 text-center"
              type="number"
              name="cardAttr2"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>

          <label className="text-xl" htmlFor="attr3">
            Resistência
            <input
              className="w-full rounded pl-2 text-center"
              type="number"
              name="cardAttr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
        </fieldset>

        <label className="text-xl" htmlFor="image">
          Imagem
          <input
            className="w-full rounded pl-2"
            type="text"
            name="cardImage"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>

        <label className="text-xl flex m-6" htmlFor="rarity">
          Raridade
          <select
            className="w-full rounded pl-2 ml-10 text-center"
            name="cardRare"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        { hasTrunfo
          ? (
            <span
              className="
                text-xl
                text-red-500 font-medium
                bg-neutral-700
                rounded
              "
            >
              Você já tem um Super Trunfo em seu baralho
            </span>
          ) : (
            <label
              className="
                text-xl
                flex
                w-full
                justify-center
              "
              htmlFor="cardTrunfo"
            >
              Super Trunfo
              <input
                className="
                  rounded
                  pl-2
                  w-5
                  ml-3
                "
                type="checkbox"
                name="cardTrunfo"
                id="cardTrunfo"
                onChange={ onInputChange }
                checked={ cardTrunfo }
                data-testid="trunfo-input"
              />
            </label>
          )}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          className="
            w-auto
            m-auto
            p-2
            bg-emerald-700
            ease-in-out duration-300
            disabled:bg-red-700
            disabled:hover:bg-red-500
            disabled:cursor-not-allowed
            hover:bg-emerald-500
            hover:cursor-pointer
            rounded
            text-white
            text-xl
          "
        >
          {isSaveButtonDisabled ? 'Preencha o formulário' : 'Salvar'}
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
  hasTrunfo: PropTypes.boolean,
  isSaveButtonDisabled: PropTypes.boolean,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
