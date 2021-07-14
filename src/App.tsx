import * as React from "react";
import Cards, { Props as CardsProps } from "./components/cards";

type State = CardsProps;

const initialState: State = {
    cards: [],
};

const App: React.FC = () => {
    const [state, setState] = React.useState(initialState);
    React.useEffect(() => {
        (async () => {
            try {
                const cards = await fetchCards();
                setState(cards as CardsProps);
            } catch {
                console.log("Crash!!!");
            }
        })();
    }, []);

    return <Cards cards={state.cards} />;
};

export default App;

const fetchCards = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                cards: [
                    {
                        pan: "4111111111111111",
                        expire: { year: 2025, month: "7" },
                        balance: 3000,
                    },
                    {
                        pan: "4242424242424242",
                        expire: { year: 2023, month: "8" },
                        balance: 5000,
                    },
                ],
            });
        }, 1000);
    });
};
