import React, { useState } from 'react';
import { c } from 'ttag';
import { VpnLogo, PrimaryButton, Icon, Href, useApi, useLoading } from 'react-components';
import { pushForkSession } from 'proton-shared/lib/api/auth';
import { CLIENT_IDS } from 'proton-shared/lib/constants';
import TVCodeInputs from './TVCodeInputs';

enum STEP {
    ENTER_CODE,
    DEVICE_CONNECTED,
}

const TVContainer = () => {
    const [code, setCode] = useState('');
    const [step, setStep] = useState(STEP.ENTER_CODE);
    const api = useApi();
    const [loading, withLoading] = useLoading();
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (loading || !code) {
            return;
        }

        try {
            setError('');
            await api(
                pushForkSession({
                    ChildClientID: CLIENT_IDS.AndroidTvVPN,
                    Independent: 1,
                    UserCode: code,
                })
            );
            setStep(STEP.DEVICE_CONNECTED);
        } catch (error) {
            const { data: { Error = '' } = {} } = error;
            setError(Error);
            throw error;
        }
    };

    const render = () => {
        if (step === STEP.ENTER_CODE) {
            return (
                <form onSubmit={(event) => withLoading(handleSubmit(event))}>
                    <label className="h3 aligncenter" htmlFor="code-input">{c('Label')
                        .t`Enter the code displayed on your TV`}</label>
                    <TVCodeInputs value={code} setValue={setCode} />
                    {error ? (
                        <>
                            <p className="mt2 mb0 pl1 aligncenter color-global-warning">{c('Error')
                                .t`Code wrong or not valid anymore`}</p>
                            <p className="m0 aligncenter noborder color-global-light">{c('Error')
                                .t`If the time on your TV has expired, click on Refresh on your TV and enter your code again.`}</p>
                        </>
                    ) : null}
                    <div className="flex">
                        <PrimaryButton
                            loading={loading}
                            type="submit"
                            className="uppercase bold pm-button--pill mt2 mb1-5 center"
                        >
                            <span className="p0-5 inline-flex">
                                {error ? c('Action').t`Verify code again` : c('Action').t`Verify code`}
                            </span>
                        </PrimaryButton>
                    </div>
                </form>
            );
        }

        if (step === STEP.DEVICE_CONNECTED) {
            return (
                <>
                    <h2>{c('Title').t`Device connected!`}</h2>
                    <div className="flex flex-justify-center mt2 mb2">
                        <span className="inline-flex bg-global-success rounded50 p2">
                            <Icon name="#shape-on" size={60} className="stroke-currentColor color-global-light" />
                        </span>
                    </div>
                </>
            );
        }

        return null;
    };

    return (
        <div className="background-container h100 flex-noMinChildren flex-column flex-nowrap flex-items-center scroll-if-needed">
            <div className="flex flex-justify-center flex-items-center pt2">
                <div className="w150p">
                    <Href url="https://protonvpn.com" target="_self">
                        <VpnLogo className="fill-primary" />
                    </Href>
                </div>
                <h3 className="mb0 pl0-25 uppercase bold">{c('Title').t`TV log in`}</h3>
            </div>
            <div className="flex flex-column flex-item-fluid flex-nowrap flex-item-noshrink">
                <div className="mauto p2 flex-item-noshrink mw30e">{render()}</div>
            </div>
        </div>
    );
};

export default TVContainer;
