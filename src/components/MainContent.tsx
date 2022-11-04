import { BabyNames } from "./BabyNames"; 
import babyNamesData from "../babyNamesData.json"; 

export const MainContent = (): JSX.Element => {
    return (
        <>
        <BabyNames babyNameArray={babyNamesData}/>
        </>
    );
}