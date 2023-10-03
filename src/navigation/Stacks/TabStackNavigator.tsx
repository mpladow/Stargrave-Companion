import { Dimensions, Platform, StyleSheet, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@hooks/useTheme";
import { AntDesign } from "@expo/vector-icons";
import { Button, Text, TextBlock } from "@components/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CrewStackNavigator from "./Crew/CrewStackNavigator";


const Tab = createBottomTabNavigator();
export const navigatorOptions = {};
const TabStackNavigator = () => {
	const { theme } = useTheme();
	return (
		<Tab.Navigator
			initialRouteName='Crew'
			screenOptions={(screenProps) => ({
				headerShown: false,
				headerTitle: (props) => (
					<View style={{ flexDirection: "row", alignItems: "center"}}>
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
				tabBarShowLabel: false,
				tabBarIcon: ({ color, size, focused }) => {
					let icon: JSX.Element = <></>;
					let label = "";
					switch (screenProps.route.name) {
						case "Crew":
							label = "Crew";
							icon = (
								<MaterialCommunityIcons
									name='counter'
									size={24}
									color={focused ? theme.warning : theme.text}
								/>
							);
							break;
						default:
							label = screenProps.route.name;
							break;
					}
					return (
						<View style={{ alignItems: "center", width: Dimensions.get('screen').width/3, justifyContent: "center" }}>
							{icon}
							<Text style={{ color: focused ? theme.warning : theme.text, fontSize: 12 }}>{label}</Text>
						</View>
					);
				},
				tabBarStyle: {
					height: Platform.OS == "ios" ? 90 : 70,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: theme.backgroundVariant,
					borderTopColor: "transparent",
				},
			})}
		>
			<Tab.Screen
				name='Crew'
				component={CrewStackNavigator}
				options={{
					tabBarLabel: "Crew Home",
					title: "CrewHome",
					headerShadowVisible: false,
					headerStyle: { backgroundColor: theme.blueGrey },
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabStackNavigator;

const styles = StyleSheet.create({});
