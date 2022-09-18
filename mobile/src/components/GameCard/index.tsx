import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  id: string
  title: string
  bannerUrl: string
  _count: { ads: number },
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.banner} source={{uri:data.bannerUrl}} >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.ads} {data._count.ads > 1 ? 'anúncios' : 'anúncio'}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}