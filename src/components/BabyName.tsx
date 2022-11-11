import { NameData } from "./MainContent";

export interface BabyNameProps {
  id: number;
  name: string;
  sex: string;
  handleNameButtonClick: (nameData: NameData) => void;
}

export const BabyName = ({
  id,
  name,
  sex,
  handleNameButtonClick
}: BabyNameProps): JSX.Element => {
  const currentButton = {id: id, name: name, sex: sex}

  return (
    <div className="BabyName">
      {sex === "m" && (
        <button className="boyNameButton" onClick={() => handleNameButtonClick(currentButton)}>
          {name}
        </button>
      )}
      {sex === "f" && (
        <button className="girlNameButton" onClick={() => handleNameButtonClick(currentButton)}>
          {name}
        </button>
      )}
    </div>
  );
};

//onclick={() => handler(buttonInfo)}