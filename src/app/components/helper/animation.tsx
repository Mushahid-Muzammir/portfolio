"use client"
import dynamic from 'next/dynamic';

interface AnimationLottie{
    animationPath: object;
    width: string
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width }: AnimationLottie) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;