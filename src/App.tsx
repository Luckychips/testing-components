import { SimpleButton, Text } from '@/components/atoms';
import { AutoComplete, Header } from '@/components/molecules';
import { SubHeader } from './components/atoms.ts';

function App() {
    return (
        <>
            <Header isVisibleSearch isVisibleCart onClickSearch={() => {}} onClickCart={() => {}} />
            <SubHeader onClick={() => {}}>
                <span>고객님, 이 상품은 어떠세요?</span>
            </SubHeader>
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
