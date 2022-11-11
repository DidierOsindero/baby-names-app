import { NameData } from "./MainContent";

export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
  favouritesList: NameData[];
  setFavouritesList(updatedArray: NameData[] | []): void;
}

export const BabyName = ({
  id,
  name,
  sex,
  favouritesList,
  setFavouritesList,
}: BabyNameProps): JSX.Element => {
  const handleNameButtonClick = () => {
    const currentButton = { id: id, name: name, sex: sex };
    //creating a condition to check if button is already in favourites list
    if (
      favouritesList.findIndex(
        (el) => el.id === currentButton.id
      ) === -1
    ) {
      setFavouritesList([...favouritesList, { id: id, name: name, sex: sex }]); //add name that was clicked from babynames data
    } else {
      setFavouritesList(
        favouritesList.filter(
          (el) => el.id !== currentButton.id
        )
      );
    }
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
