import babyNamesData from "../babyNamesData.json";
import { useState } from "react";
import { BabyName } from "./BabyName";
import { NameData } from "./BabyNames";
import { BabyNames } from "./BabyNames";



export const MainContent = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
  const [favouritesList, setFavouritesList] = useState<NameData[]>([]);

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
        />
      </div>
    </>
  );
};
