import { View} from 'react-native';
import { IUser } from '../../views/Home';
import { Avatar, Text } from 'react-native-paper';
import { styles } from './index.styles';

export function Usuario(usuario: IUser) {
    return <View style={styles.container}>
        <View style={styles.header}>

            <Avatar.Image size={100} source={{
                uri: usuario?.avatar_url
            }} />
            <View style={styles.userDetails}>
                <Text variant='bodyLarge'>{usuario?.name}</Text>
                <Text>@{usuario?.login}</Text>
                <Text>Usuario desde: {usuario?.created_at}</Text>
                <Text>Seguidores {usuario?.followers}</Text>
                <Text>Repositorios {usuario?.public_repos}</Text>
            </View>
        </View>
        <Text>{usuario?.bio}</Text>
    </View>
}