import { View } from "react-native"
import { Text } from "react-native-paper"

export interface IRepository {
    name: string
    language: string
    description: string
    created_at: string
}

export function Repositorio(repository: IRepository) {
    return <View style={{
        borderWidth: 1,
        margin: 5,
        padding: 5
    }}>
        <Text variant='bodyLarge'>{repository.name}</Text>
        <Text>Linguagem: {repository.language}</Text>
        <Text>Criado em: {repository?.created_at}</Text>
        <Text>Descrição: {repository.description}</Text>
    </View>
}