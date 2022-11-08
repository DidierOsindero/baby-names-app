import { BabyName } from "./BabyName";

interface BabyNamesProps {
  babyNameArray: nameDataProps[];
  currentSearchText: string;
  handleNameButtonClick: () => void;
}

interface nameDataProps {
  id: number;
  name: string;
  sex: string;
}

export const BabyNames = ({
  babyNameArray,
  currentSearchText,
  handleNameButtonClick
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
                  handleNameButtonClick={handleNameButtonClick}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
