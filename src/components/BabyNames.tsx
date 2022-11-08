import { BabyName } from "./BabyName";

interface BabyNamesProps {
  babyNameArray: NameData[];
  currentSearchText: string;
  favouritesList: NameData[];
  setFavouritesList: (updatedArray: NameData[] | []) => void;
  clickedButton: NameData | undefined;
  setClickedButton: (newButtonData: NameData) => void;
}

export interface NameData {
  id: number;
  name: string;
  sex: string;
}

export const BabyNames = ({
  babyNameArray,
  currentSearchText,
  favouritesList,
  setFavouritesList,
  clickedButton,
  setClickedButton
}: BabyNamesProps): JSX.Element => {
  return (
    <>
      <ul className="nameList">
        {babyNameArray
          .filter((element) =>
            element.name
              .toLowerCase()
              .includes(currentSearchText.toLocaleLowerCase()) && 
              favouritesList.findIndex(item => JSON.stringify(item) === JSON.stringify(element)) === -1
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
                  favouritesList={favouritesList}
                  setFavouritesList={setFavouritesList}
                  clickedButton={clickedButton}
                  setClickedButton={setClickedButton}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
