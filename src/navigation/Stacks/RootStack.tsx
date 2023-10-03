import { StyleSheet, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@hooks/useTheme";
import TabStackNavigator from "./TabStackNavigator";

export type RootStackParamList = {
	MainTabs: undefined;
	TrackerStackNavigator: undefined;
};
const Root = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
	const {theme} = useTheme();
	return (
		<Root.Navigator
			initialRouteName='MainTabs'
			screenOptions={{
				headerStyle: { backgroundColor: theme.blueGrey },
				headerShown: false
			}}
		>
			<Root.Group screenOptions={{ headerShown: false }}>
				<Root.Screen component={TabStackNavigator} name='MainTabs' />
			</Root.Group>
		</Root.Navigator>
	);
};

export default RootStack;

const styles = StyleSheet.create({});
