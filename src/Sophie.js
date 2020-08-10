import React from 'react';
// const hebrewLetters = "אבבּגדהוזחטיככּךלמםנןסעפפּףצץקרשׁשׂתתּ" ;
const nekudot = " ֯ ֮ ֭ ֬  ֫ ֩ ֨ ֧  ֦  ֥ ֤  ֣ ֽ֢  ֢ ֡   ֠ ֟ ֞ ֝ ֜ ֛ ֚  ֙ ֘ ֗ ֖ ֕  ֔ ֓ ֒ ֑  ׀    ֑ "



export default function Sophie ( {p}) {
    // &nbsp;
    return (
        <boxy>
            <h7 flex>
                {p.map(s => {
                  return (
                    <>{s.map(w => {
                        return (
                            <>
                            {/* &#x5c3;&#x5c3;&#1475;&#1425; */}
                            <hov2>
                                {w.map(l => {
                                    // console.log(String(l))

                                    // if (l === `&#1425;`) {
                                    if (nekudot.indexOf(String(l)) === -1) {
                                        return ( <hov>{l}</hov>)}
                                    else {
                                        return (<hov><vowel>&shy;{l}</vowel></hov>)}
                                    } ) }
                            </hov2> 
                            &nbsp;
                            </>
                        ) })} 
                        <br/> 
                    </> 
                  )
                })}
            </h7>
            </boxy>
);
}

export function Batsheva ( {p}) {
    // &nbsp;
    return (
        <boxy>
            <h7 flex>
                {p.map(s => {
                  return (
                    <>{s.map(w => {
                        return (
                            <>
                            {/* &#x5c3;&#x5c3;&#1475;&#1425; */}
                            <hov2>
                                {w.map(l => {return ( <hov>{l}</hov>)} )}
                            </hov2> 
                            &nbsp;
                            </>
                        ) })} 
                        <br/> 
                    </> 
                  )
                })}
            </h7>
            </boxy>
);
}



