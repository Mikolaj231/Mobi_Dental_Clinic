import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }} // Kolory tła nagłówka
      headerImage={<ThemedView style={styles.headerPlaceholder} />} // Placeholder dla nagłówka, bez obrazka
    >
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title">Witaj w Aplikacji!</ThemedText>
        <ThemedText>To jest główna strona aplikacji.</ThemedText>
        {/* Możesz dodać więcej treści tutaj */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerPlaceholder: {
    height: 200, // Wysokość nagłówka
    backgroundColor: '#A1CEDC', // Ustaw tło nagłówka
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    alignItems: 'center', // Centrowanie zawartości
  },
});
