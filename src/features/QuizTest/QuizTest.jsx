import { useState, useEffect, useMemo } from 'react';
import './QuizTest.scss';
import Button from 'src/components/Button';
import Alert from 'src/components/Alert';
import Paragraph from 'src/components/Paragraph';
import { questions } from 'src/services/questions';
import DOMPurify from 'dompurify';

const QuizTest = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const initializeAnswers = () => {
        setAnswers(
            questions.question.blanks.reduce((acc, blank) => ({
                ...acc,
                [blank.id]: ''
            }), {})
        );
        setResult(null);
        setIsSubmitDisabled(false); 
    };

    const handleDrop = (word, blankId) => {
        const targetBlank = questions.question.blanks.find(blank => blank.id === blankId);
        if (targetBlank?.correctAnswer === word) {
            setAnswers(prev => {
                const updatedAnswers = { ...prev, [blankId]: word };
                return updatedAnswers;
            });
        }
    };

    const handleSubmit = () => {
        debugger;
        const isCorrect = questions.question.blanks.every(
            blank => answers[blank.id] === blank.correctAnswer
        );
        setResult(isCorrect);
        setIsSubmitDisabled(true); 
    };

    const parts = useMemo(() =>
        questions.question.paragraph.split(/\[_input\]/),
        []
    );

    const BlankSpace = ({ blankId }) => (
        <span
            onDrop={e => {
                e.preventDefault();
                const word = e.dataTransfer.getData('text');
                handleDrop(word, blankId);
            }}
            onDragOver={e => e.preventDefault()}
            className="quiztest-blankspace"
        >
            {answers[blankId]}
        </span>
    );

    useEffect(() => {
        initializeAnswers();
    }, []);

    return (
        <div className="quiztest">
            <div className="quiztest-text">
                {parts.map((part, index) => (
                    <div key={index} className="item">
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(part) }} />
                        {index < parts.length - 1 && (
                            <BlankSpace
                                blankId={questions.question.blanks[index].id}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div className="quiztest-dragwords">
                {questions.question.dragWords.map(({ id, word, color }) => (
                    <Paragraph key={id} word={word} color={color} onDragStart={e => e.dataTransfer.setData('text', word)} />
                ))}
            </div>

            <div className="quiztest-actions">
                <Button
                    onClick={handleSubmit}
                    className=" btn-success"
                    disabled={isSubmitDisabled} 
                >
                    Kiểm tra
                </Button>
                <Button
                    onClick={initializeAnswers}
                    className=" btn-reset"
                >
                    Làm lại
                </Button>
            </div>

            {result !== null && (
                <Alert isSuccess={result}>
                    {result ? '🎉 Chính xác! Bạn đã điền đúng.' : '❌ Sai, vui lòng thử lại.'}
                </Alert>
            )}
        </div>
    );
};

export default QuizTest;
