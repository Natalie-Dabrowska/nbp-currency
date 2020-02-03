import React from "react";
import Title from "../../Components/Title/Title";
import Search from "../../Components/Search/Search";
import Currency from "../../Components/Currency/Currency";
import api from "../../api/api";
import Checkbox from "../../Components/Checkbox/Checkbox"
import "./style.css";

class CurrencyList extends React.Component {
  state = {
    searchText: "",
    currencyArray: [],
    favoriteCurrencyList: [],
    showFavoriteCurrencies: false
  };


  addToFavorite = (codeValue) => {
    const newFavoriteList = this.state.favoriteCurrencyList;
    newFavoriteList.push(codeValue)
    this.setState({
      favoriteCurrencyList: newFavoriteList
    });
    localStorage.setItem('favoriteCurrencyList', JSON.stringify(newFavoriteList));
  }

  removeFromFavorite = (codeValue) => {
    const newFavoriteList = this.state.favoriteCurrencyList.filter(item => {
      return codeValue !== item
    });
    this.setState({
      favoriteCurrencyList: newFavoriteList
    })
    localStorage.setItem('favoriteCurrencyList', JSON.stringify(newFavoriteList));
  }

  handleSearchText = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  componentDidMount() {
    api.getCurrency().then(response => {
      this.setState({
        currencyArray: response[0].rates,
        favoriteCurrencyList: JSON.parse(localStorage.getItem('favoriteCurrencyList')) || []
      });
    });
  }

  handleFavoriteCurrencies = () => {
    this.setState({
      showFavoriteCurrencies: !this.state.showFavoriteCurrencies
    })
  }

  render() {
    const filteredCurrencies = this.state.currencyArray.filter(item => {
      if (this.state.showFavoriteCurrencies && !this.state.favoriteCurrencyList.includes(item.code)) {
        return false
      }

       const currencyNameLowerCase = item.currency.toLowerCase();
       const searchTextLowerCase = this.state.searchText.toLowerCase();
       
       return currencyNameLowerCase.startsWith(searchTextLowerCase);
    });

    return (
      <div>
        <Title />
        <Search
          value={this.state.searchText}
          onChange={this.handleSearchText}
        />
        <Checkbox
          checked={this.state.showFavoriteCurrencies}
          onClick={this.handleFavoriteCurrencies}
        />
        <table className="currency">
          <tr className="table-currency">
            <th>Waluta</th>
            <th>Symbol</th>
            <th>Kurs</th>
            <th>Dodaj</th>
          </tr>
          {filteredCurrencies.map(currency => {
            return (
              <Currency
                currency={currency.currency}
                code={currency.code}
                mid={currency.mid}
                addToFavorite={this.addToFavorite}
                removeFromFavorite={this.removeFromFavorite}
                isFavorite={this.state.favoriteCurrencyList.includes(currency.code)}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default CurrencyList;
