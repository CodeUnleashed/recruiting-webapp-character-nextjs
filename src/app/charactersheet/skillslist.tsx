import {useState} from 'react';

export default function SkillsList ({ attributes, skills, index, modifyCharacter }) {
    const [availableSkillPoints, setAvailableSkillPoints] = useState(10);

    function updateValue(skill, newValue) {
        // When we are trying to use a skill point
        if (newValue > 0 && availableSkillPoints < 1) {
            alert("Character " + (index + 1) + " has used all their skill points!")
            return;
        }

        setAvailableSkillPoints(availableSkillPoints - newValue);
        modifyCharacter('skills', skill.name, skill.value + newValue)
    }
    
    function getModifier(attribute) {
        const attrIndex = attributes.findIndex((element) => element.name === attribute);
        return Math.floor((attributes[attrIndex].value - 10) / 2);
    }

    return (
        <div>
            <div className="flex flex-col items-center my-3">Total skill points available: {availableSkillPoints}</div>
            <div>
                {skills.map((skill) => (
                    <p>{skill.name}: {skill.value}(Modifier: {skill.attributeModifier}) {getModifier(skill.attributeModifier)} 
                    <button onClick={() => updateValue(skill, +1)} className="btn-sm btn-light-gray">+</button>
                    <button onClick={() => updateValue(skill, -1)} className="btn-sm btn-light-gray">-</button>
                    total: {skill.value + getModifier(skill.attributeModifier)}</p>
                ))}
            </div>
        </div>
    )
}