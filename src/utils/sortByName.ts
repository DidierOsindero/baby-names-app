import { NameData } from "../components/MainContent";

export const sortByName = (inputArray: NameData[]): NameData[] => {
  const sortedArray: NameData[] = inputArray.sort((a, b) => {
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
  return sortedArray;
};
