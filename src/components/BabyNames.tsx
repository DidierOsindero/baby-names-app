import { BabyName } from "./BabyName";

interface BabyNamesProps {
    jsonFile: nameDataProps[]
}

interface nameDataProps {
    id: number,
    name: string,
    sex: string
}

export const BabyNames = (props: BabyNamesProps): JSX.Element => {
    return (
        <>
            <BabyName id={1} name="Jane" sex="f"/>
        </>
    );
}