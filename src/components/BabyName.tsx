import { NameData } from "./BabyNames";

export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
  favouritesList: NameData[];
  setFavouritesList: (updatedArray:NameData[]|[]) => void;
}


export const BabyName = ({ id, name, sex, favouritesList, setFavouritesList }: BabyNameProps): JSX.Element => {
  const handleNameButtonClick = () => {
    setFavouritesList([{id:id, name:name, sex:sex},...favouritesList]) //add name that was clicked from babynames data
    }

  return (
    <div className="BabyName">
      {sex === "m" && <button className="boyNameButton" onClick={handleNameButtonClick}>{name}</button>}
      {sex === "f" && <button className="girlNameButton" onClick={handleNameButtonClick}>{name}</button>}
    </div>
  );
};
