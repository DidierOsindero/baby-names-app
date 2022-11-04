import { BabyName } from "./BabyName";

interface BabyNamesProps {
    babyNameArray: nameDataProps[]
}

interface nameDataProps {
    id: number,
    name: string,
    sex: string
}
//props.jsonFile[index] => gives you specific name object
export const BabyNames = ({babyNameArray}: BabyNamesProps): JSX.Element => {

    const sortedBabyNameArray = babyNameArray.sort((a,b)=> {
        const name1 = a.name;
        const name2 = b.name;

        if (name1 > name2) {
            return 1;
        } else if (name1 < name2) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log("SORTED ARRAY:", sortedBabyNameArray)
    return (
        <ul className="nameList">
            {sortedBabyNameArray.map(element => {
                return (
                    <li key={element.id}>
                    <BabyName 
                        id={element.id} 
                        name={element.name}
                        sex={element.sex}
                    />
                    </li>
                )
            })}
        </ul>
    );
}