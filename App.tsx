import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList
} from 'react-native';
import QuestionCard from './src/components/QuestionCard';
import { questions, Question } from './src/data/questions';

function App(): React.JSX.Element {
  const [quiz, setQuiz] = useState<Question[]>([]);

  useEffect(() => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    const shuffledQuiz = shuffledQuestions.map((question) => {
      const correctAnswer = question.answers[question.correctAnswerIndex];
      const answers = question.answers.sort(() => Math.random() - 0.5);
      const correctAnswerIndex = answers.indexOf(correctAnswer);
      
      return {
        question: question.question,
        answers,
        correctAnswerIndex
      };
    });

    setQuiz(shuffledQuiz);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quiz App</Text>
      <FlatList
        data={quiz}
        renderItem={({item, index}) => <QuestionCard item={item} index={index} />}
        keyExtractor={(question, index) => `${index}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 22
  }
});

export default App;
