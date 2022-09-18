import React from 'react';

interface Props {
  title: string;
  ads: number
  href: string
  imgSource: string
  imgAlt?: string
}

const GameBanner: React.FC<Props> = ({ title, ads, href, imgSource, imgAlt }) => {
  return (
    <a href={href} className='relative rounded-lg overflow-hidden'>
      <img src={imgSource} alt={imgAlt} />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0' >
        <strong className='font-bold text-white block' >{title}</strong>
        <span className='text-zinc-300 text-sm block mt-1' >{ads} {ads > 1 ? 'anúncios' : 'anúncio'}</span>
      </div>
    </a>
  );
}

export default GameBanner;