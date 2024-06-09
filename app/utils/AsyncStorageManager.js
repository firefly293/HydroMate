import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
        console.log("set key " + key.toString() + " to value " + value.toString())
    }
    catch (err) {
        console.warn(err)
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) return value;
        return null;
    } catch (err) {
        console.warn(err)
    }
}
