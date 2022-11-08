import babyNamesData from "../babyNamesData.json";
import { useState } from "react";
import { BabyName } from "./BabyName";
import { NameData } from "./BabyNames";
import { BabyNames } from "./BabyNames";

export const MainContent = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const [favouritesList, setFavouritesList] = useState<NameData[]>([]);
  const [clickedButton, setClickedButton] = useState<NameData>();

  const [allButton, setAllButton] = useState<boolean>(true);
  const [girlOnlyButton, setGirlOnlyButton] = useState<boolean>(false);
  const [boyOnlyButton, setBoyOnlyButton] = useState<boolean>(false);

  const handleAllFilter = () => {
    setAllButton(true);
    setBoyOnlyButton(false);
    setGirlOnlyButton(false);
  }

  const handleBoyOnlyFilter = () => {
    setAllButton(false);
    setBoyOnlyButton(true);
    setGirlOnlyButton(false);
  }

  const handleGirlOnlyFilter = () => {
    setAllButton(false);
    setBoyOnlyButton(false);
    setGirlOnlyButton(true);
  }

  //Sort baby names array into alphabetical order
  const babyNameArray = babyNamesData.sort((a, b) => {
    const name1 = a.name;
    const name2 = b.name;

    if (name1 > name2) {
      return 1;
    } else if (name1 < name2) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="searchBarWrapper">
        <input
          className="searchBar"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button className="allButton" onClick={handleAllFilter}>all</button>
        <button className="girlOnlyButton" onClick={handleGirlOnlyFilter}>girls</button>
        <button className="boyOnlyButton" onClick={handleBoyOnlyFilter}>boys</button>
      </div>
      <div className="favouritesListWrapper">
        <div className="favouritesTextWrapper">
          <p>Favourites</p>
        </div>
        {favouritesList.map((element) => {
          return (
            <li key={element.id}>
              <BabyName
                id={element.id}
                name={element.name}
                sex={element.sex}
                favouritesList={favouritesList}
                setFavouritesList={setFavouritesList}
                clickedButton={clickedButton}
                setClickedButton={setClickedButton}
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
          clickedButton={clickedButton}
          setClickedButton={setClickedButton}
          isGirlsOnly={girlOnlyButton}
          isBoysOnly={boyOnlyButton}
          isAll={allButton}
        />
      </div>
    </>
  );
};
