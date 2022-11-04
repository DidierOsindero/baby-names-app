interface BabyNameProps {
    id: number,
    name: string,
    sex: string
}


export const BabyName = ({id, name, sex}: BabyNameProps): JSX.Element => {
    return (
    <div className="BabyName">
        {sex === "m" && <button className="boyNameButton">{name}</button>}
        {sex === "f" && <button className="girlNameButton">{name}</button>}
    </div>
    );
}