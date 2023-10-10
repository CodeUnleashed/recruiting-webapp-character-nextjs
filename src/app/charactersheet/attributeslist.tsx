export default function AttributesList ({ attributes, index, modifyCharacter }) {
    const total = () => attributes.reduce((total, attr) => total + attr.value, 0);

    function updateValue(attribute, newValue) {
        if (newValue > 20) {
            alert("Character " + (index + 1) + "'s " + attribute.name + " has reached the maximum 20 points.")
            return;
        } else if (newValue < 1) {
            alert("Character " + (index + 1) + "'s " + attribute.name + " has reached the minimum 1 point.")
            return;
        } else if (newValue > attribute.value && total() === 70) {
            alert("Character " + (index + 1) + " has reached the maximum 70 points.");
            return;
        }

        console.log(newValue);
        modifyCharacter("attributes", attribute.name, newValue)
    }
    
    function getModifier(attribute) {
        return Math.floor((attribute.value - 10) / 2);
    }

    return (
        <div>
            <h1>Total: {total()}</h1>
            {attributes.map((attribute) => (
                 <div>
                    {attribute.name}: {attribute.value}(Modifier: {getModifier(attribute)})
                    <button onClick={() => updateValue(attribute, attribute.value + 1)} className="btn-sm btn-light-gray">+</button>
                    <button onClick={() => updateValue(attribute, attribute.value - 1)} className="btn-sm btn-light-gray">-</button>
                </div>
            ))}
        </div>
    )
}