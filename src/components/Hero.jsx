import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-[10%] w-full mx-auto flex flex-col items-start z-10
      sm:top-[16%] 
      
      lg:top-[20%] lg:pl-[40vh] lg:pr-[40vh] 
      xl:pl-96 xl:pr-[44vh] 
      2xl:pl-[20vh] 2xl:pr-[20vh] 2xl:mr-20 2xl:ml-20'
      >
        <div className="flex-1 lg:mb-0">
          <h1 className='fade-in font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[140px] leading-[110px] 2xl:leading-[160px]'>
            PACE THOMSON
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end 2xl:justify-center mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className='font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left'>
            I am a passionate, <br/> hard-working, and fast-learning software engineer.
          </div>
        </div>
      </div>

      <img className="parallax__background" src="./parallax/bg.svg" alt="" />
      <img className="parallax__sun" src="./parallax/sun_blurred.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/three.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/two.svg" alt="" />
      <img className="parallax__frontWithCactus" src="./parallax/one.svg" alt="" />
      <img className="parallax__mountain3" src="./parallax/four.svg" alt="" />

      {/* <SpacemanCanvas scrollContainer={scrollContainer} /> */}
    </section>
  );
};

export default Hero;
