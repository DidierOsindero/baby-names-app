interface BabyNameProps {
    id: number,
    name: string,
    sex: string
}


export const BabyName = ({id, name, sex}: BabyNameProps): JSX.Element => {
    return (
    <>
        {sex === "m" && <button className="boyNameButton">Tom</button>}
        {sex === "f" && <button className="girlNameButton">Sarah</button>}
    </>
    );
}