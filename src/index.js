import { AsyncStorage } from 'react-native'

export default class StagyncAsyncStorage {
  removeItem (item, callback) {
    AsyncStorage.removeItem(item, callback)
  }

  async getItem (item, callback) {
    try {
      let result = null
      const value = await AsyncStorage.getItem(item)
      try {
        result = JSON.parse(value)
      } catch (err) {
        result = value
      }

      callback(null, result)
    } catch (err) {
      callback(err)
    }
  }

  setItem (item, value, callback) {
    let _value = null

    try {
      if (typeof value === 'object') {
        _value = JSON.stringify(value)
      }
    } catch (e) {
      _value = value
    }

    try {
      AsyncStorage.setItem(item, _value, callback)
    } catch (e) {
      console.log(e)
    }
  }

  mergeItem (item, value, callback) {
    let _value = null

    try {
      if (typeof value === 'object') {
        _value = JSON.stringify(value)
      }
    } catch (e) {
      _value = value
    }

    try {
      AsyncStorage.mergeItem(item, _value, callback)
    } catch (e) {
      console.log(e)
    }
  }

  clear (callback) {
    AsyncStorage.clear(callback)
  }
}
