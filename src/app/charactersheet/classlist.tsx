import { CLASS_LIST } from "../consts";

export default function ClassList () {
    return (
        <div className="flex flex-col items-center">
            {Object.entries(CLASS_LIST).map(([key, value]) => (
                <p>{key}</p>
            ))}
        </div>
    )
}