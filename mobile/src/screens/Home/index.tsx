import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';

export function Home() {

  const navigation = useNavigation()

  const [games, setGames] = useState<GameCardProps[]>([])

  const handleOpenGame = useCallback(({ id, title, bannerUrl }: GameCardProps) => {
    navigation.navigate('game', { id, title, bannerUrl })
  }, [games, navigation])

  useEffect(() => {
    fetch('http://192.168.0.104:3333/games')
      .then(res => res.json())
      .then(((res: GameCardProps[]) => {
        setGames(res)
      }))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />
        <Heading
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={()=>{handleOpenGame(item)}}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}