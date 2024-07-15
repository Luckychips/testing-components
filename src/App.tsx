import { SimpleButton, Text } from '@/components/atoms';
import { AutoComplete, Header } from '@/components/molecules';

function App() {
    return (
        <>
            <Header />
            <main>
                <SimpleButton onClick={() => console.log('clicked!')}>
                    <span>simple button!</span>
                </SimpleButton>
                <Text>greeting</Text>
                <AutoComplete />
            </main>
        </>
    );
}

export default App;
