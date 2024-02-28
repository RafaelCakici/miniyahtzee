import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.author}>
        Author: Rafael Cakici
      </Text>
    </View>
  )
} 