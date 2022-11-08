export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
  handleNameButtonClick: () => void;
}


export const BabyName = ({ id, name, sex, handleNameButtonClick }: BabyNameProps): JSX.Element => {


  return (
    <div className="BabyName">
      {sex === "m" && <button className="boyNameButton" onClick={handleNameButtonClick}>{name}</button>}
      {sex === "f" && <button className="girlNameButton">{name}</button>}
    </div>
  );
};
