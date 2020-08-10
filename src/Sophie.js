import React from 'react';
// const hebrewLetters = "אבבּגדהוזחטיככּךלמםנןסעפפּףצץקרשׁשׂתתּ" ;
// const nekudot = " ֯ ֮ ֭ ֬  ֫ ֩ ֨ ֧  ֦  ֥ ֤  ֣  ֢  ֢ ֡  ֠ ֟ ֞ ֝ ֜ ֛ ֚  ֙ ֘ ֗ ֖ ֕  ֔ ֓ ֒ ֑ ׃ ׀    ֑ "
export default function Sophie ( {p}) {
    // &nbsp;
    return (
            <h7>
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
                                    // if (hebrewLetters.indexOf(String(l)) > -1) {

                                    //     return ( <hov> <vowel>{l} </vowel> </hov>)}
                                    // // else return ( <hov> {l} </hov>)
                                    return ( 
                                    <hov>
                                    {l}
                                    </hov>)}
                                    
                                    )} 
                            </hov2> 
                            &nbsp;
                            </>
                        ) })} 
                        <br/> 
                    </> 
                  )
                })}
            </h7>

);
}


