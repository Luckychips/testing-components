import { FormInput, SimpleButton, Text } from '@/components/atoms';

function App() {
    return (
        <main>
            <FormInput label="First Name" name="field-first-name" />
            <SimpleButton onClick={() => console.log('clicked!')}>
                <span>simple button!</span>
            </SimpleButton>
            <Text>greeting</Text>
        </main>
    );
}

export default App;
