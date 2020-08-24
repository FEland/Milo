import React, {useState}  from 'react'; 
import Button from '@material-ui/core/Button';


export default function Master ( ) {
    const [tikkun, setTikkun] = useState(false);

    return (
        <div>
        <div style={{'color': 'white'}}>
            <h1 >Welcome to Harrison's Bar Mitzvah Website! </h1>
            <h2 >Explore the Links Above</h2>
        <frontpage>
        <img src="/Slides/Melech4.jpg" alt="frontpage" loading="lazy" 
        />
 
        </frontpage>
        </div>

        {!tikkun ? <Button variant="contained" color="primary" onClick={() => { setTikkun(true)}}>Open Up Tikkun</Button> : ''}
        {tikkun ? <iframe src="https://www.tikkun.io" width="80%" height="400" style={{'border': "4px solid blue"}} title="tikkunIO"></iframe> : ''}
        {/* <div style={{'position':"absolute"}}> */}
            {/* <img src="/Slides/Shema/02.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img>
            <img src="/Slides/Cov.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img> */}


        </div>
);
}