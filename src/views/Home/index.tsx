import { useState } from 'react';
import { IRepository, Repositorio } from '../../components/Repositorio';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { Searchbar, Text } from 'react-native-paper';
import api from '../../services/backapi';
import { StatusBar } from 'expo-status-bar';
import { Usuario } from '../../components/Usuario';

export interface IUser {
    login: string,
    id: number,
    public_repos: number,
    followers: number,
    avatar_url: string,
    name: string,
    bio: string,
    created_at: string;
}

export default function Home() {
    const [usuario, setUsuario] = useState<IUser>()
    const [repositorios, setRepositorios] = useState<IRepository[]>([])
    const [text, setText] = useState("");

    return (
        <>
            <View style={styles.container}>
                <Searchbar
                    placeholder='Digite o nome para buscar...'
                    onChangeText={text => setText(text)}
                    value={text}
                    onIconPress={() => {
                        api.get(`users/${text}`).then(res => {
                            setUsuario(res.data)
                        })
                        api.get(`users/${text}/repos`).then(res => {
                            setRepositorios(res.data)
                        })
                    }}
                />
                <Text variant="titleMedium">Detalhes usuário</Text>
                <Usuario
                    {...usuario}
                />

                <FlatList
                    data={repositorios}
                    keyExtractor={item => String(item.name)}
                    renderItem={({ item }) => (
                        <Repositorio {...item} />
                    )}
                    ListHeaderComponent={<Text variant="titleMedium">{repositorios.length} repositorios encontrados</Text>}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20, paddingTop: 5 }}
                />

                <StatusBar style="auto" />
            </View>
        </>
    )
}