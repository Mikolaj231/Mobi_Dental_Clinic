import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Eksploruj</ThemedText>
      </ThemedView>
      <ThemedText>Ta aplikacja zawiera przykładowy kod, aby pomóc Ci rozpocząć.</ThemedText>
      <Collapsible title="Routing oparty na plikach">
        <ThemedText>
          Ta aplikacja ma dwa ekrany:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> i{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>.
        </ThemedText>
        <ThemedText>
          Plik układu w <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText> ustawia
          nawigator zakładek.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Dowiedz się więcej</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Wsparcie dla Androida, iOS i web">
        <ThemedText>
          Możesz otworzyć ten projekt na Androida, iOS i w sieci. Aby otworzyć wersję web, naciśnij{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> w terminalu uruchamiającym ten projekt.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Obrazy">
        <ThemedText>
          Dla statycznych obrazów możesz używać sufiksów <ThemedText type="defaultSemiBold">@2x</ThemedText> i{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText>, aby zapewnić pliki dla
          różnych gęstości ekranów.
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Dowiedz się więcej</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Niestandardowe czcionki">
        <ThemedText>
          Otwórz <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>, aby zobaczyć jak ładować{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            niestandardowe czcionki, takie jak ta.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Dowiedz się więcej</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Komponenty z trybami jasnym i ciemnym">
        <ThemedText>
          Ten szablon ma wsparcie dla trybów jasnego i ciemnego. Hook{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> pozwala ci sprawdzić,
          jaki aktualnie jest kolorystyka użytkownika, dzięki czemu możesz dostosować kolory UI odpowiednio.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Dowiedz się więcej</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animacje">
        <ThemedText>
          Ten szablon zawiera przykład animowanego komponentu. Komponent{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> wykorzystuje
          potężną bibliotekę <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>,
          aby stworzyć animację machania ręką.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Komponent <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              zapewnia efekt paralaksy dla obrazu nagłówka.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
