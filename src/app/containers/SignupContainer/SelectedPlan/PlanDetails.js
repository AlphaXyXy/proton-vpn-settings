import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { CYCLE, CURRENCIES } from 'proton-shared/lib/constants';

import { PLAN } from '../plans';
import PriceInfo from './PriceInfo';

import './Plan.scss';

const PlanDetails = ({ selectedPlan, cycle, currency }) => {
    const { planName, title, features } = selectedPlan;
    return (
        <div className="flex flex-column bordered-container">
            <h6 className="p0-5 mb0 w100 aligncenter color-primary">{c('Title').t`${title} plan details`}</h6>
            <div className="p1">
                <ul className="selected-plan-list unstyled m0 selected-plan-list--negative">
                    {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
                {planName !== PLAN.FREE && (
                    <div className="border-top pt1 mt1">
                        <PriceInfo plan={selectedPlan} cycle={cycle} currency={currency} />
                    </div>
                )}
            </div>
        </div>
    );
};

PlanDetails.propTypes = {
    selectedPlan: PropTypes.object.isRequired,
    cycle: PropTypes.oneOf([CYCLE.MONTHLY, CYCLE.TWO_YEARS, CYCLE.YEARLY]).isRequired,
    currency: PropTypes.oneOf(CURRENCIES).isRequired,
};

export default PlanDetails;
