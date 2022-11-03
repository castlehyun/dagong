import { TouchableOpacity } from 'react-native-gesture-handler';
import {images} from './images';
import { StyleSheet, Image } from 'react-native';

const IconButton = ({type, onPressOut, id})=>{
    const _onPressOut = () => {
        onPressOut(id);
    };

    IconButton.defaultProps = {
        onPressOut: () => {},
    };

    return (
        <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
            <Image source={type} />
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    iconbutton:{
        margin:10,
    },
});

export default IconButton;