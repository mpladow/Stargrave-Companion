import { NavigationContainer } from "@react-navigation/native";
import { ThemeContextProvider } from "@context/ThemeContext";
import RootStack from "src/navigation/Stacks/RootStack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const App = () => {
	const [fontsLoaded] = useFonts({
		GaramondItalic: require("./assets/fonts/EBGaramond-Italic.ttf"),
		GaramondRegular: require("./assets/fonts/EBGaramond-Regular.ttf"),
		GaramondBold: require("./assets/fonts/EBGaramond-ExtraBold.ttf"),
		"PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
		"PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
		"PTSans-Italic": require("./assets/fonts/PTSans-Italic.ttf"),
		"BarlowCondensed-Bold": require("./assets/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf"),
		"BarlowCondensed-Regular": require("./assets/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf"),
		"BarlowCondensed-Italic": require("./assets/fonts/Barlow_Condensed/BarlowCondensed-Italic.ttf"),
	});
	useEffect(() => {
		async function prepare() {
			if (fontsLoaded) {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<ThemeContextProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</ThemeContextProvider>
	);
};
export default App;
