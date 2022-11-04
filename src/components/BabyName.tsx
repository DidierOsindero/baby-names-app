interface BabyNameProps {
    id: number,
    name: string,
    sex: string
}


export const BabyName = ({id, name, sex}: BabyNameProps): JSX.Element => {
    return (
    <>
        <h1>My Baby Name is {name}</h1>
    </>
    );
}