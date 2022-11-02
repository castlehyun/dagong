import { Dimensions } from "react-native";
import IconButton from "./IconButton";
import { images } from "./images";
import { StyleSheet, View, Text } from "react-native";

const Task = ({text}) => {
    return (
        <View style={styles.container}>
            <IconButton type={images.uncompleted} />
            <Text style={{fontSize: 20, flex: 1}}>{text}</Text>
            <IconButton type={images.edit} />
            <IconButton type={images.delete} />
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: Dimensions.get('window').width-15,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Task;