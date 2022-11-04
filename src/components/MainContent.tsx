import { BabyNames } from "./BabyNames";
import babyNamesData from "../babyNamesData.json";

export const MainContent = (): JSX.Element => {
    
    const sortedBabyNameArray = babyNamesData.sort((a, b) => {
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

  return (
    <>
      <BabyNames babyNameArray={sortedBabyNameArray} />
    </>
  );
};
