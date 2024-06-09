import AsyncStorage from "@react-native-async-storage/async-storage";

export function storeValue(key, value, callback) {
    AsyncStorage.setItem(key, value, callback)
}

export function getValue(key, callback) {
    AsyncStorage.getItem(key)
        .then(function(value) { callback(value) })
}