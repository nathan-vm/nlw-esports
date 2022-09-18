import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { GameParams } from '../../@types/navigation';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { useCallback, useEffect, useState } from 'react';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export function Game() {
  const route = useRoute()
  const navigation = useNavigation()
  const game = route.params as GameParams

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])


  useEffect(() => {
    fetch(`http://192.168.0.104:3333/games/${game.id}/ads`)
      .then(res => res.json())
      .then(((res) => {
        setDuos(res)
      }))
  }, [game])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />

          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image style={styles.cover} resizeMode="cover" source={{ uri: game.bannerUrl }} />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          style={styles.containerList}
          contentContainerStyle={duos.length > 0 ? styles.contentList : styles.emptyListContent }
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <DuoCard
            data={item}
            onConnect={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anúncios publicados ainda
          </Text>
        )

        }
        />

      </SafeAreaView>
    </Background>
  );
}