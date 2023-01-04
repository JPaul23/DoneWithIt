import React from 'react'
import { DrawerLayoutAndroid, Text, View, StyleSheet } from "react-native";

const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
        <Text style={styles.paragraph}>I'm in the Drawer!</Text>
        <Button
            title="Close drawer"
        //onPress={() => drawer.current.closeDrawer()}
        />
    </View>
);


const DrawerScreen = () => {
    return (
        <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition="left"
            renderNavigationView={navigationView}
        >
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Drawer on the Screen!
                </Text>

                <Text style={styles.paragraph}>
                    Swipe from the side
                </Text>
                <Button
                    title="Open drawer"
                //onPress={() => drawer.current.openDrawer()}
                />
            </View>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    navigationContainer: {
        backgroundColor: "#ecf0f1"
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: "center"
    }
});

export default DrawerScreen;
