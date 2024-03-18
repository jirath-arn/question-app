import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet,
    Alert
} from 'react-native';
import { Question } from '../data/questions';

type QuestionCardProps = {
    item: Question;
    index: number;
};

function QuestionCard({ item, index }: QuestionCardProps) {
    const handleAnswerSelection = (selectedAnswerIndex: number) => {
        if (selectedAnswerIndex === item.correctAnswerIndex) {
            Alert.alert('Answer', 'Correct !');
            
        } else {
            Alert.alert('Answer', 'Incorrect !');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`${index + 1}. ${item.question}`}</Text>
            <FlatList
                data={item.answers}
                renderItem={({ item: answer, index: answerIndex }) => (
                    <Button
                        key={answerIndex}
                        title={answer}
                        onPress={() => handleAnswerSelection(answerIndex)}
                    />
                )}
                keyExtractor={(answer, answerIndex) => `${index}-${answerIndex}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 32,
        paddingHorizontal: 24
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 10,
    }
});

export default QuestionCard;
