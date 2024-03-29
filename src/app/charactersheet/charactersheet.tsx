import { CLASS_LIST, SKILL_LIST } from "../consts"
import AttributesList from "./attributeslist"
import ClassList from "./classlist"
import SkillsList from "./skillslist"

export default function CharacterSheet ({ character, index, modifyCharacter}) {
    return (
        <div className="default-border p-2 space-y-4">
            <header className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Character: {index + 1}</h1>
            </header>
            <div className="default-border flex flex-col items-center p-5">
                <header>
                    <h2 className="text-2xl font-bold">Skill Check</h2>
                </header>
                <div className="flex flex-row justify-center items-center space-x-2">
                    Skill: <select className="default-border">
                        {SKILL_LIST.map((skill) => (
                            <option value={skill.name}>{skill.name}</option>
                        ))}
                    </select>
                    DC: <input type="text" className="default-border" />
                    <button className="btn-sm btn-gray">Roll</button>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-4">
                <div className="character-detail-section">
                    <header>
                        <h1 className="text-2xl font-bold">Attributes</h1>
                    </header>
                    <AttributesList attributes={character.attributes} index={index} modifyCharacter={modifyCharacter}/>
                </div>
                <div className="character-detail-section">
                    <header>
                        <h1 className="text-2xl font-bold">Classes</h1>
                    </header>
                    <div className="flex flex-col items-center">
                        <ClassList />
                    </div>
                </div>
                <div className="character-detail-section">
                    <header>
                        <h1 className="text-2xl font-bold">Skills</h1>
                    </header>
                    <div>
                        <SkillsList attributes={character.attributes} skills={character.skills} index={index} modifyCharacter={modifyCharacter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}