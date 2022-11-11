import babyNamesData from "../babyNamesData.json";
import { useState } from "react";
import { BabyName } from "./BabyName";
import { BabyNames } from "./BabyNames";
import { sortByName } from "../utils/sortByName";

export interface NameData {
  id: number;
  name: string;
  sex: string;
}

export const MainContent = (): JSX.Element => {
  //S T A T E S
  const [searchText, setSearchText] = useState("");
  const [favouritesList, setFavouritesList] = useState<NameData[]>([]);

  const [isAll, setisAll] = useState<boolean>(true);
  const [isGirlsOnly, setisGirlsOnly] = useState<boolean>(false);
  const [isBoysOnly, setisBoysOnly] = useState<boolean>(false);

  //H A N D L E R - F U N C T I O N S
  const handleAllFilter = () => {
    setisAll(true);
    setisBoysOnly(false);
    setisGirlsOnly(false);
  };

  const handleBoyOnlyFilter = () => {
    setisAll(false);
    setisBoysOnly(true);
    setisGirlsOnly(false);
  };

  const handleGirlOnlyFilter = () => {
    setisAll(false);
    setisBoysOnly(false);
    setisGirlsOnly(true);
  };

  const handleNameButtonClick = (currentButton: NameData) => {
    //creating a condition to check if button is already in favourites list
    if (
      favouritesList.findIndex(
        (el) => el.id === currentButton.id
      ) === -1
    ) {
      setFavouritesList([...favouritesList, { id: currentButton.id, name: currentButton.name, sex: currentButton.sex }]); //add name that was clicked from babynames data
    } else {
      setFavouritesList(
        favouritesList.filter(
          (el) => el.id !== currentButton.id
        )
      );
    }
  };

  //S O R T - D A T A
  const babyNameArray = sortByName(babyNamesData);

  //M A I N _ C O N T E N T - R E T U R N 
  return (
    <>
      <div className="titleWrapper">
        <h1>Baby Name Picker</h1>
      </div>
      <div className="searchBarWrapper">
        <input
          className="searchBar"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      <div className="filterButtons">
        {!isAll && (
          <button className="allButton" onClick={handleAllFilter}>
            all
          </button>
        )}
        {isAll && (
          <button className="currentFilterButton" onClick={handleAllFilter}>
            all
          </button>
        )}
        {!isGirlsOnly && (
          <button className="girlOnlyButton" onClick={handleGirlOnlyFilter}>
            girls
          </button>
        )}
        {isGirlsOnly && (
          <button
            className="currentFilterButton"
            onClick={handleGirlOnlyFilter}
          >
            girls
          </button>
        )}
        {!isBoysOnly && (
          <button className="boyOnlyButton" onClick={handleBoyOnlyFilter}>
            boys
          </button>
        )}
        {isBoysOnly && (
          <button className="currentFilterButton" onClick={handleBoyOnlyFilter}>
            boys
          </button>
        )}
      </div>
      <div className="favouritesListWrapper">
        <div className="favouritesTextWrapper">
          <p>Favourites:</p>
        </div>
        {favouritesList.map((element) => {
          return (
            <li key={element.id}>
              <BabyName
                id={element.id}
                name={element.name}
                sex={element.sex}
                handleNameButtonClick={handleNameButtonClick}
              />
            </li>
          );
        })}
      </div>
      <hr />
      <div className="babyNamesListWrapper">
        <BabyNames
          babyNameArray={babyNameArray}
          currentSearchText={searchText}
          favouritesList={favouritesList}
          setFavouritesList={setFavouritesList}
          handleNameButtonClick={handleNameButtonClick}
          isGirlsOnly={isGirlsOnly}
          isBoysOnly={isBoysOnly}
          isAll={isAll}
        />
      </div>
    </>
  );
};
