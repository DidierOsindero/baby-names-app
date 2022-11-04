import { BabyName } from "./BabyName";

interface BabyNamesProps {
  babyNameArray: nameDataProps[];
  currentSearchText: string;
}

interface nameDataProps {
  id: number;
  name: string;
  sex: string;
}

export const BabyNames = ({
  babyNameArray,
  currentSearchText,
}: BabyNamesProps): JSX.Element => {
  return (
    <>
      <ul className="nameList">
        {babyNameArray.map((element) => {
          if (
            element.name
              .toLowerCase()
              .includes(currentSearchText.toLocaleLowerCase())
          ) {
            return (
              <li key={element.id}>
                <BabyName
                  id={element.id}
                  name={element.name}
                  sex={element.sex}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};
