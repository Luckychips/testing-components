import { FormInput, SimpleButton, Text } from '@/components/atoms';
import { AutoComplete } from '@/components/molecules';

function App() {
    return (
        <main>
            <SimpleButton onClick={() => console.log('clicked!')}>
                <span>simple button!</span>
            </SimpleButton>
            <Text>greeting</Text>
            <AutoComplete />
        </main>
    );
}

export default App;
