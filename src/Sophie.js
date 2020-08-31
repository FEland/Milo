import React, {useState} from 'react'
// import {Shemas} from './Effie';
// const hebrewLetters = "אבגדהוזחטיכךלמםנןסעפףצץקרשת" ;

// const hebrewLetters = "אבבּגדהוזחטיככּךלמםנןסעפפּףצץקרשׁשׂתתּ" ;
const nekudot = " ֯ ֮ ֭ ֬ ֫ ֩ ֨ ֧ ֦ ֥ ֤ ֣ ֽ֢ ֢ ֡ ֠ ֟ ֞ ֝ ֜ ֛ ֚  ֙ ֘ ֗ ֖ ֕  ֔ ֓ ֒ ֑  ׀    ֑♢ "

const Vowel = ({l}) => {

    return (<hov><vowel>&shy;{l}</vowel></hov>)
};

const Letter2 = ({l}) => {

  const [flip, setFlip] = useState(false);

    return (<hov style={flip? {'mix-blend-mode': 'difference'} : {'':''} } onDoubleClick={() => {setFlip(!flip)}} >{l}</hov>)

  };


export default function Sophie ( {p}) {

  return (
    <boxy>
      <span>
        {p.map(s => { 
            return ( 
              <>{s.map(w => {
                  return (
                      <>
                      <hov2>
                          {w.map(l => {
                            if (nekudot.indexOf(String(l)) === -1) {
                              return (<Letter2 l={l}></Letter2>)
                            }
                            else {
                              return (<Vowel l={l}></Vowel>)
                            }
                          } 
                        )}
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

export function Batsheva ( {p}) {

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
                                {w.map(l => {return ( 
                                                              <Letter2 l={l}></Letter2>

                                // <hov onClick={() => {setFlip(!flip)}} contenteditable="true" >{l}</hov>
                                )} 
                                )}
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



