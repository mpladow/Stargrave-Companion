import { StyleSheet, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CrewHome from "./CrewHome";
import { Text } from "@components/index";
import { useTheme } from "@hooks/useTheme";

export type CrewStackParamList = {
	CrewHome: undefined;
};
const CrewStack = createNativeStackNavigator<CrewStackParamList>();
const CrewStackNavigator = () => {
	const { theme } = useTheme();
	return (
		<CrewStack.Navigator
			screenOptions={{
				headerTitle: (props) => (
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text
							variant='heading3'
							style={{
								fontSize: 28,
							}}
						>
							{props.children}
						</Text>
					</View>
				),
				headerBackTitleVisible: false,
				headerTintColor: theme.warning,
				headerShadowVisible: false,
				headerStyle: { backgroundColor: theme.blueGrey },
			}}
		>
			<CrewStack.Screen name='CrewHome' component={CrewHome}></CrewStack.Screen>
		</CrewStack.Navigator>
	);
};

export default CrewStackNavigator;
