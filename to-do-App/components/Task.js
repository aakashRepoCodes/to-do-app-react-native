import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.row}>

            <View style={styles.itemLeft}>

                <TouchableOpacity style={styles.square} />

                <View>
                    <Text> Task: {props.text}</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#0492C2',
        borderRadius: 4,
        opacity: 0.4,
        marginRight: 14
    }

})

export default Task

