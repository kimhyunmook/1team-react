import SelfIntroduce from "../전준기/SelfIntroduce.js"
import GrowUp from "../전준기/GrowUp.js";
import FirstImpression from "../전준기/FirstImpression.js";
import Restorant from "../전준기/Restorant.js";
import "../전준기/jungiPage.css";


export default function JeonJunGi(){
    
    return (
        <div className="wrap">
            
            <SelfIntroduce />
            <GrowUp />
            <FirstImpression />
            <Restorant />
        </div>
    )
}