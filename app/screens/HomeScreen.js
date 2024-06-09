import React, { createRef, useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import { CircularProgress, CircularProgressBase } from 'react-native-circular-progress-indicator';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from "../config/colors"
import { storeValue, getValue } from '../utils/AsyncStorageManager';
import { useEffect } from 'react';



function HomeScreen(props) {
    const [water, setWater] = useState(0)
    const [goal, setGoal] = useState(64)
    const [currentAdd, setCurrentAdd] = useState(8)

    var clamp = function(n, min, max) {
        if (n < min) return min
        if (n > max) return max
        else return n
    }

    var mySetWater = function(val) {
        setWater(val)
        AsyncStorage.setItem("data", JSON.stringify({ water: water, goal: goal }), () => { console.log("stored water value " + val.toString()) })
    }

    var mySetGoal = function(val) {
        setGoal(val)
        AsyncStorage.setItem("data", JSON.stringify({ water: water, goal: goal }))
    }

    useEffect(() => {
        // Set the values to the values in the data
        var dataCallback = function(dataString) {
            console.log("in data callback")
            if (dataString) {
                var data = JSON.parse(dataString)
                setWater(clamp(data.water, 0, 1000))
                setGoal(clamp(data.goal, 0, 1000))
                console.log("loaded data from disk")
            }
            else {
                console.log("no data found")
            }
        }

        AsyncStorage.getItem("data", dataCallback)
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar} >
                <Text style={styles.topBarText}>Hydro<Text style={{ color: colors.secondary, fontStyle: "italic" }}>Mate</Text></Text>
            </View>
            <View style={styles.mainContent}>
                <View style={styles.progressSection} elevation={5}>
                    <Text style={styles.headingText}>Progress</Text>
                    <CircularProgressBase
                        value={clamp(water / goal * 100, 0, 100)}
                        radius={120}
                        activeStrokeColor={colors.primary}
                        inActiveStrokeColor={colors.primary}
                        activeStrokeWidth={30}
                        inActiveStrokeWidth={30}
                        inActiveStrokeOpacity={0.2}
                    >
                        <Text style={styles.ProgressNumberText}>{water} oz / {goal} oz</Text>
                    </CircularProgressBase>
                    <View style={styles.amountToAddAdjustView}>
                        <TouchableOpacity onPress={() => setCurrentAdd(clamp(currentAdd - 0.5, 0.5, 100))} onLongPress={() => setCurrentAdd(clamp(currentAdd - 10, 0.5, 100))}>
                            <Image style={styles.addSubtractIcon} source={require("../assets/images/minus.png")}></Image>
                        </TouchableOpacity>
                        <Text style={styles.currentAddText}>{currentAdd} oz</Text>
                        <TouchableOpacity onPress={() => setCurrentAdd(clamp(currentAdd + 0.5, 0.5, 100))} onLongPress={() => setCurrentAdd(clamp(currentAdd + 10, 0.5, 100))}>
                            <Image style={styles.addSubtractIcon} source={require("../assets/images/plus.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity   >
                        <Button title="LOG" onPress={() => mySetWater(clamp(water + currentAdd, 0, 1000))} style={styles.logButton}></Button>
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    addSubtractIcon: {
        width: 30,
        height: 30,
        opacity: 0.5
    },
    amountToAddAdjustView: {
        width: '100%',
        height: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0000',
        padding: 10
    },
    currentAddText: {
        fontFamily: "Coolvetica",
        fontSize: 25,
        padding: 10,
        width: 100,
        textAlign: "center",
        opacity: 0.5
    },
    circularProgressBar: {
        padding: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight
    },
    headingText: {
        fontSize: 50,
        color: "black",
        padding: 0,
        fontFamily: "Coolvetica",
        alignSelf: "flex-start"
    },
    logButton: {
        width: '15%',
        alignSelf: "flex-start"
    },
    lottie: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none',
    },
    mainContent: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        padding: 20
    },
    ProgressNumberText: {
        fontFamily: 'Coolvetica',
        fontSize: 30
    },
    progressSection: {
        width: '100%',
        height: "auto",
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 10
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
