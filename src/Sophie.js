import React from 'react';
// import {Shemas} from './Effie';
// const hebrewLetters = "אבגדהוזחטיכךלמםנןסעפףצץקרשת" ;

// const hebrewLetters = "אבבּגדהוזחטיככּךלמםנןסעפפּףצץקרשׁשׂתתּ" ;
const nekudot = " ֯ ֮ ֭ ֬ ֫ ֩ ֨ ֧ ֦ ֥ ֤ ֣ ֽ֢ ֢ ֡ ֠ ֟ ֞ ֝ ֜ ֛ ֚  ֙ ֘ ֗ ֖ ֕  ֔ ֓ ֒ ֑  ׀    ֑ "


export default function Sophie ( {p}) {
    // &nbsp;
    var b = p.map(s => { 
        return ( 
          <>{s.map(w => {
              return (
                  <>
                  <hov2>
                      {w.map(l => {
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
      })

    return (
        <boxy>{b}</boxy>
);
}

export function Batsheva ( {p}) {
    // &nbsp;
    return (
        <boxy>
        <span>
            {p.map(s => {
                  return (
                    <>{s.map(w => {
                        return (
                            <>
                            {/* &#x5c3;&#x5c3;&#1475;&#1425; */}
                            <hov2>
                                {w.map(l => {return ( <hov >{l}</hov>)} )}
                            </hov2> 
                            &nbsp;
                            </>
                        ) })} 
                        <br/> 
                    </> 
                  )
                })}
        </span>
        </boxy>
);
}



