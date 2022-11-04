import { BabyName } from "./BabyName";

interface BabyNamesProps {
  babyNameArray: nameDataProps[];
}

interface nameDataProps {
  id: number;
  name: string;
  sex: string;
}
//props.jsonFile[index] => gives you specific name object
export const BabyNames = ({ babyNameArray }: BabyNamesProps): JSX.Element => {

  return (
    <ul className="nameList">
      {babyNameArray.map((element) => {
        return (
          <li key={element.id}>
            <BabyName id={element.id} name={element.name} sex={element.sex} />
          </li>
        );
      })}
    </ul>
  );
};
