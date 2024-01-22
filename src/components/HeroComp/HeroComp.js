import { Avatar } from "@readyplayerme/visage";
import { FcBusinessman } from "react-icons/fc";

const HeroComp = () => {
  return (
    <div id="intro" className="hero-div">
      <div className="hero-text">
        <h1 className="hero-heading"><FcBusinessman /> Hi, I'm <span id="hero-name">Sitaram Madiraju.</span></h1>
        <p className="hero-desc">
          Skilled web developer proficient in React.js, Python, Node.js.
          Specializing in crafting user-friendly, innovative applications to
          drive business growth.
        </p>
      </div>
      <div id="avatar-wrapper-div">
        <Avatar
          style={{
            alignSelf: "flex-end",
            height: "100%",
            width: "80%",
          }}
          scale={1}
          fov={50}
          environment="apartment"
          shadows={true}
          cameraInitialDistance={9 / 5}
          ambientLightIntensity={1}
          emotion={{
            browInnerUp: 0.3,
            browOuterUpLeft: 0.37,
            browOuterUpRight: 0.49,
            eyeSquintLeft: 0.4,
            eyeSquintRight: 0.4,
            mouthShrugUpper: 0.27,
            mouthSmileLeft: 0.37,
            mouthSmileRight: 0.36
          }}
          modelSrc={
            "https://models.readyplayer.me/658338c7d8a387c17aece94c.glb?morphTargets=ARKit,Eyes%20Extra"
          }
          
          animationSrc={
            "https://readyplayerme.github.io/visage/male-idle.glb?queryParams=allowed&lod=0"
          }
          onLoadedAnimation={{
            loop: 1,
            src: "https://readyplayerme.github.io/visage/male-spawn-animation.fbx",
          }}
          
        ></Avatar>
      </div>
    </div>
  );
};

export default HeroComp;
