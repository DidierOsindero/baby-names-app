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
              .includes(currentSearchText.toLocaleLowerCase())
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
