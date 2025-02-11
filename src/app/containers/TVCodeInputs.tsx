import React, { useEffect, useState, useRef } from 'react';
import { Input } from 'react-components';
import './TVCodeInputs.scss';

interface Props {
    value: string;
    setValue: (value: string) => void;
}

const TVCodeInputs = ({ value, setValue }: Props) => {
    const [first, setFirst] = useState(() => value.substring(0, 4));
    const [second, setSecond] = useState(() => value.substring(4, 4));
    const refFirstInput = useRef<HTMLInputElement>(null);
    const refSecondInput = useRef<HTMLInputElement>(null);

    const handleKeyUpFirst = (event: React.KeyboardEvent<HTMLElement>) => {
        const eventKey = event.key;
        if (first.length === 4 && eventKey !== 'Backspace' && eventKey !== 'Delete') {
            event.preventDefault();
            refSecondInput?.current?.focus();
        }
    };

    const handleKeyUpSecond = (event: React.KeyboardEvent<HTMLElement>) => {
        const eventKey = event.key;
        if (second.length === 0 && (eventKey === 'Backspace' || eventKey === 'Delete')) {
            refFirstInput?.current?.focus();
            setSecond('');
        }
    };

    const handleOnChangeFirst = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 4) {
            event.preventDefault();
            return false;
        }
        setFirst(event.target.value.toUpperCase());
    };

    const handleOnChangeSecond = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 4) {
            event.preventDefault();
            return false;
        }
        setSecond(event.target.value.toUpperCase());
    };

    useEffect(() => {
        setValue([first, second].join(''));
    }, [first, second]);

    return (
        <>
            <div className="code-input-container flex flex-justify-center automobile">
                <div className="code-input-div flex-item-fluid flex flex-column aligncenter onmobile-pb1 onmobile-pt0-5">
                    <Input
                        ref={refFirstInput}
                        minLength={4}
                        maxLength={4}
                        value={first}
                        onChange={handleOnChangeFirst}
                        onKeyUp={handleKeyUpFirst}
                        placeholder="1234"
                        className="bold mw15e flex-self-end mauto"
                        required
                        autoFocus
                    />
                </div>
                <hr className="w5 tv-hr ml1 mr1 mt1-5 mbauto nomobile" />
                <div className="code-input-div flex-item-fluid flex flex-column aligncenter onmobile-pb1 onmobile-pt0-5">
                    <Input
                        ref={refSecondInput}
                        minLength={4}
                        maxLength={4}
                        value={second}
                        onChange={handleOnChangeSecond}
                        onKeyUp={handleKeyUpSecond}
                        placeholder="ABCD"
                        className="bold mw15e mauto"
                        required
                    />
                </div>
            </div>
        </>
    );
};

export default TVCodeInputs;
