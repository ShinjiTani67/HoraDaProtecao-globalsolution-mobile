import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
    const router = useRouter();
    return (
        <View style={styles.container}> 
            <Pressable 
                style={styles.backButton}
                onPress={() => router.replace('/')}
            >
                <Text style={styles.backButtonText}>← Voltar</Text>
            </Pressable>

            <Text style={styles.title}>About</Text>
            
            <View style={styles.memberContainer}>
                <Image
                    source={require('@/assets/images/cadu.jpg')}
                    style={styles.userIcon}
                />
                <Text style={styles.name}>Carlos Eduardo Ariza</Text>
                <Text style={styles.rm}>RM553461</Text>
            </View>

            <View style={styles.memberContainer}>
                <Image
                    source={require('@/assets/images/fernando.jpg')}
                    style={styles.userIcon}
                />
                <Text style={styles.name}>Fernando Tanigushi</Text>
                <Text style={styles.rm}>RM553587</Text>
            </View>

            <View style={styles.memberContainer}>
                <Image
                    source={require('@/assets/images/joao.jpg')}
                    style={styles.userIcon}
                />
                <Text style={styles.name}>João Vitor Valaitis</Text>
                <Text style={styles.rm}>RM553972</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    backButtonText: {
        fontFamily: 'Jost',
        fontSize: 16,
        color: '#007AFF',
    },
    memberContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    userIcon: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'Jost',
        fontSize: 26,
        marginBottom: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 40,
    },
    name: {
        fontFamily: 'Jost',
        fontSize: 18,
        color: '#000',
        marginBottom: 5,
    },
    rm: {
        fontFamily: 'Jost',
        fontSize: 16,
        color: '#666',
    }
});

export default About;
