import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    Summer : {
        text : `Let's hit the beach!`,
        iconName : `sun`
    },
    Winter : {
        text: `Burr it is cold!`,
        iconName: `snowflake`
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {   // 0,1,2,3,4,5,6,7,8,9,10,11 lesa tama months enne | 3-8  summer nort eke
        return lat > 0 ? `Summer` : `Winter` 
        //return lat > 0 ? `Lets hit the beach` : `Burr, it's chilly!`  1-method
    }else {
        return lat > 0 ? `Winter` : `Summer`
        //return lat > 0 ? `Burr, it's chilly!` : `Lets hit the beach`
    }
}

const SeasonDisplay = (props) => {
    //console.log(props.lat);
    
    const season = getSeason(props.lat,new Date().getMonth());
    // return <div>{season}</div>  1 -method dammot mehema
    //const text = season === 'Winter' ? `Burr, it's chilly!` : `Lets hit the beach`
    //const icon = season === 'Winter' ? 'snowflake' : 'sun';
    const { text, iconName} = seasonConfig[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    ); // variable reffer karanawata amatharawa  expression unat danna puluwan  
                                                                                             
};

export default SeasonDisplay;