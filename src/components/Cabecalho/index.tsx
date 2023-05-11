import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
//@ts-ignore
import git from '../../assets/git.png';
import { styles } from './index.styles';

export function Cabecalho() {
    return <View style={styles.container}>
        <Avatar.Image size={45} source={git} />
        <Text variant="titleLarge">Github search</Text>
    </View>
}