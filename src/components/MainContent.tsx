
import babyNamesData from "../babyNamesData.json";
import { BabyNames } from "./BabyNames";
import { useState } from "react";

export const MainContent = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");
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
      <div>
        <BabyNames babyNameArray={babyNameArray} />
      </div>
    </>
  );
};
