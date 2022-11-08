import babyNamesData from "../babyNamesData.json";
import { BabyNames } from "./BabyNames";
import { useState } from "react";
import { BabyName } from "./BabyName";
import { NameData } from "./BabyNames";



export const MainContent = (): JSX.Element => {

const [searchText, setSearchText] = useState("");
const [favouritesList, setFavouritesList] = useState<NameData[]>([]);


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
      </div>
      <div className="favouritesListWrapper">
        {favouritesList.map((element) => {
          return (
            <li key={element.id}>
              <BabyName id={element.id} name={element.name} sex={element.sex} favouritesList={favouritesList}
  setFavouritesList={setFavouritesList} />
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
        />
      </div>
    </>
  );
};
