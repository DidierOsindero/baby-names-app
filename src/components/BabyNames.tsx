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
    return (
        <>
            <BabyName id={1} name="Jane" sex="f"/>
            {babyNameArray.map(element => {
                return (
                    <BabyName 
                        id={element.id} 
                        name={element.name}
                        sex={element.sex}
                        key={element.id}
                    />
                )
            })}
        </>
    );
}