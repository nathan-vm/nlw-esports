import { useEffect, useState } from 'react'
import axios from 'axios'
import * as Dialog from '@radix-ui/react-dialog'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'

import logoImg from './assets/logo-new-esports.svg'
import './styles/main.css'
import CreateAdModal from './components/CreateAdModal'
export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => {
        setGames(res.data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="logo" />

      <h1 className='text-6xl text-white font-black mt-20 ' >Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => (
          <GameBanner
            key={game.id}
            title={game.title}
            ads={game._count.ads}
            href=""
            imgSource={game.bannerUrl} />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal data={games} />
      </Dialog.Root>
    </div>
  )
}

export default App
