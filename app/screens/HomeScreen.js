import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from 'react-native';

import colors from "../config/colors"


function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>Hydro<Text style={{color: colors.secondary, fontStyle: "italic"}}>Mate</Text></Text>
            </View>
            <View style={styles.mainContent}>
                <View style={styles.progressSection}>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight
    },
    mainContent: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    progressSection: {
        width: '100%',
        height: 200,
        padding: 5,
        backgroundColor: '#ccc'
    },
    topBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center'
    },
    topBarText: {
        fontSize: 40,
        color: colors.primary,
        padding: 5,
        paddingLeft: 20,
        fontFamily: "Coolvetica"
    }
})

export default HomeScreen;