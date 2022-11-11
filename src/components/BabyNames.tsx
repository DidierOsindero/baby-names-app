import { BabyName } from "./BabyName";
import { NameData } from "./MainContent";

interface BabyNamesProps {
  babyNameArray: NameData[];
  currentSearchText: string;
  favouritesList: NameData[];
  setFavouritesList(updatedArray: NameData[] | []): void;
  handleNameButtonClick: (nameData: NameData) => void;
  isGirlsOnly: boolean;
  isBoysOnly: boolean;
  isAll: boolean;
}

export const BabyNames = ({
  babyNameArray,
  currentSearchText,
  favouritesList,
  setFavouritesList,
  handleNameButtonClick,
  isGirlsOnly,
  isBoysOnly,
  isAll,
}: BabyNamesProps): JSX.Element => {
  return (
    <>
      <ul className="nameList">
        {babyNameArray
          .filter(
            (element) => {
              const isMatchingSearch = element.name
                .toLowerCase()
                .includes(currentSearchText.toLocaleLowerCase());
              const isNotInFavourites =
                favouritesList.findIndex((item) => item.id === element.id) ===
                -1;
              const isBoyName = element.sex === "m";
              const isGirlName = element.sex === "f";

              if (isBoysOnly) {
                return isMatchingSearch && isNotInFavourites && isBoyName;
              } else if (isGirlsOnly) {
                return isMatchingSearch && isNotInFavourites && isGirlName;
              } else {
                return isMatchingSearch && isNotInFavourites;
              }
            }
            //if this returns a number >= 0 then that element is in favourites
            //filter out items which are in the favourites list - must pass condition NOT IN FAVOURITES LIST
          )
          .map((element) => {
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
      </ul>
    </>
  );
};
