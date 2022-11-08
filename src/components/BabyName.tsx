import { NameData } from "./BabyNames";

export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
  favouritesList: NameData[];
  setFavouritesList: (updatedArray: NameData[] | []) => void;
  clickedButton: NameData | undefined;
  setClickedButton: (newButtonData: NameData) => void;
}

export const BabyName = ({
  id,
  name,
  sex,
  favouritesList,
  setFavouritesList,
  clickedButton,
  setClickedButton
}: BabyNameProps): JSX.Element => {
  const handleNameButtonClick = () => {
    const currentButton = { id: id, name: name, sex: sex }
    //creating a condition to check if button is already in favourites list
    if (
      favouritesList.findIndex(
        (el) =>
          JSON.stringify(el) ===
          JSON.stringify(currentButton)
      ) === -1
    ) {
      setFavouritesList([...favouritesList, { id: id, name: name, sex: sex }]); //add name that was clicked from babynames data
    } 
    setClickedButton(currentButton)
  };

  return (
    <div className="BabyName">
      {sex === "m" && (
        <button className="boyNameButton" onClick={handleNameButtonClick}>
          {name}
        </button>
      )}
      {sex === "f" && (
        <button className="girlNameButton" onClick={handleNameButtonClick}>
          {name}
        </button>
      )}
    </div>
  );
};
