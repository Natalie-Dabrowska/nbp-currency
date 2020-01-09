import React from "react";
import "./style.css";

const Currency = ({ currency, code, mid, addToFavorite, isFavorite, removeFromFavorite  }) => {
  const handleAddToFavorite = () => {
    addToFavorite(code);
  };
  const handleRemoveFromFavorite = () => {
    removeFromFavorite(code);
  }

  return (
    <tr>
      <td className="currency-name">{currency}</td>
      <td className="code-name">{code}</td>
      <td className="mid-name">{mid}</td>
      <td className="add-name">
        {isFavorite ? (
            <i 
            onClick={handleRemoveFromFavorite}
            class="fa fa-check-circle fa-lg" aria-hidden="true"></i>
        ) : (
          <i
            onClick={handleAddToFavorite}
            className="fa fa-plus-circle fa-lg"
            aria-hidden="true"
          ></i>
        )}
      </td>
    </tr>
  );
};

export default Currency;
