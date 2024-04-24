import Lottie from "lottie-react";
import animation from "../../assets/animation/Animation - 1713947777361.json"

function LoadingAnimation(){
    return (
        <div className="d-flex justify-content-center my-5">
            <span style={{width:200}}>
                <Lottie animationData ={animation}/>
            </span>
        </div>
    );
}

export default LoadingAnimation;