import Taro , { Component , Config } from '@tarojs/taro'
import Main from '../../components/main/Main'
import { View } from '@tarojs/components'

export default class IndexC extends Component{
  render () {
    return (
      <View>
        <Main />
      </View>
    )
  }
}