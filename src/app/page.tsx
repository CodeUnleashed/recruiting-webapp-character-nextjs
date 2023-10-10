'use client';

import {useState} from 'react';
import CharacterSheet from './charactersheet/charactersheet';
import { ATTRIBUTE_LIST, SKILL_LIST } from './consts';

export default function Home() {
    const [characters, setCharacters] = useState([]);

    function modifyCharacter(index, attributeName, attributeValue) {
        const updatedCharacters = [...characters];
        const character = updatedCharacters[index];
        const attrIndex = character.attributes.findIndex((element) => element.attributeName === attributeName);
        character.attributes[attrIndex].value = attributeValue;
        console.log(character);
        setCharacters(updatedCharacters);
    }

    return (
        <main>
            <nav className="flex flex-col text-center">
                <header className="flex flex-col text-white bg-[#282c34] p-5">
                    <h1 className="text-[calc(10px+2vmin)] font-bold">React Coding Exercise - Qail Mukhi</h1>
                </header>
                <section className="flex flex-row justify-center space-x-4 w-100">
                    <button className="btn btn-blue" onClick={() => {
                        setCharacters([
                            ...characters,
                            {
                                attributes: ATTRIBUTE_LIST.map(attributeName => ({attributeName, value: 10})),
                                skills: SKILL_LIST.map(skill => ({...skill, value: 0}))
                            }
                        ]);
                    }}>Add New Character</button>
                    <button className="btn btn-blue">Reset All Characters</button>
                    <button className="btn btn-blue">Save All Characters</button>
                </section>
            </nav>
            <div className="flex flex-col w-100 justify-center">
                <header className="flex flex-col items-center">
                    <h1 className="text-[calc(10px+1vmin)] font-bold">Skill Check Results</h1>
                    <h2 className="text-[calc(4px+1vmin)] font-bold">Character: 1 (TODO: CHANGE TO VARIABLE)</h2>
                </header>
                <section className="flex flex-col items-center">
                    <p>Skill: Acrobatics: 8 (TODO: SKILL_NAME: SKILL_AMOUNT)</p>
                    <p>You rolled: 15 (TODO: Roll Amount)</p>
                    <p>The DC was: 20 (TODO: DC Amount)</p>                
                    <p>Result: Successful (TODO: rolled >= DC)</p>                
                </section>
            </div>
            
            <div className="p-5 space-y-8">
                {characters.map((character, index) => (
                    <CharacterSheet
                        character={character}
                        index={index}
                        modifyCharacter={(attributeName, attributeValue) => modifyCharacter(index, attributeName, attributeValue)}/>
                ))}
            </div>
        </main>
    )
}
