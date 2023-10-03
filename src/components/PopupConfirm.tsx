import { Dimensions, Modal, StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@hooks/useTheme";
import Button from "./button";
import { Text } from "@components/index";

type PopupConfirmProps = {
	visible: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	text: JSX.Element;
	confirmText: string;
	cancelText: string;
	headerText: string;
};
const PopupConfirm = ({
	onConfirm,
	onCancel,
	text,
	confirmText,
	cancelText,
	visible,
	headerText,
}: PopupConfirmProps) => {
	const { theme } = useTheme();
	return (
		<Modal animationType='fade' visible={visible} transparent={true} style={{ elevation: 20 }}>
			<View style={styles.modalOverlay} onTouchStart={() => onCancel()}></View>
			<View
				style={{
					marginTop: Dimensions.get("screen").height / 3,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: theme.blueGrey,
					padding: 16,
					margin: 12,
					borderRadius: 20,
				}}
			>
				<Text variant='heading3' style={{ color: theme.text, fontSize: 28 }}>
					{headerText}
				</Text>

				<View style={{ padding: 20 }}>{text}</View>
				<View
					style={{
						//flex: 1,
						flexDirection: "column", // set elements horizontally`.
						justifyContent: "center",
						alignItems: "stretch",
						width: Dimensions.get("screen").width-32-24
					}}
				>
					<Button onPress={() => onConfirm()} variant={"danger"}>
						<Text bold>{confirmText}</Text>
					</Button>
					<Button variant={"text"} onPress={() => onCancel()}>
						<Text style={{ color: theme.white }}>{cancelText}</Text>
					</Button>
				</View>
			</View>
		</Modal>
	);
};

export default PopupConfirm;

const styles = StyleSheet.create({
	modalOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		//backgroundColor: 'blue',
		backgroundColor: "rgba(0,0,0,0.1)",
	},
});
