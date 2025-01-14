import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Title } from 'react-components';
import './RedeemContainer.scss';

import GadgetImage from 'design-system/assets/img/pv-images/redeem/gadgets.png';
import SwissBasedIcon from 'design-system/assets/img/pv-images/redeem/swiss_based.svg';
import SecureCoreIcon from 'design-system/assets/img/pv-images/redeem/secure_core.svg';
import NoLogsIcon from 'design-system/assets/img/pv-images/redeem/no_logs.svg';
import KillSwitchIcon from 'design-system/assets/img/pv-images/redeem/kill_switch.svg';
import DNSIcon from 'design-system/assets/img/pv-images/redeem/dns.svg';
import EncryptionIcon from 'design-system/assets/img/pv-images/redeem/encryption.svg';
import PublicPage from '../components/page/PublicPage';
import PublicHeader from '../components/layout/PublicHeader';
import RedeemCouponForm from '../components/sections/redeem/RedeemCouponForm';

const RedeemContainer = ({ history }) => (
    <PublicPage title={c('Title').t`Redeem coupon`}>
        <div className="pt2 pl2 pr2">
            <PublicHeader />
        </div>
        <div className="redeem-heading-bg pt1 pl2 pr2">
            <div className="mw80 ontablet-mw100 center">
                <Title className="redeem-heading-title mt2 mb1-5 color-white bold">
                    {c('Title').t`Redeem your coupon and start protecting your online privacy`}
                </Title>
                <div className="flex">
                    <RedeemCouponForm history={history} />
                    <div className="col center nomobile notablet">
                        <img
                            src={GadgetImage}
                            alt={c('Image alt').t`Laptop & smartphone shown connected to ProtonVPN network.`}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-global-light p2">
            <div className="flex flex-spacebetween onmobile-flex-column aligncenter ontablet-mw100 mw80 center mt2">
                {[
                    {
                        icon: SwissBasedIcon,
                        alt: c('Image alt').t`Swiss based`,
                        title: c('Title').t`Swiss Based`,
                        about: c('About')
                            .t`Protect your data with Swiss privacy laws, some of the strongest in the world`,
                    },
                    {
                        icon: SecureCoreIcon,
                        alt: c('Image alt').t`Secure core servers`,
                        title: c('Title').t`Secure Core Servers`,
                        about: c('About')
                            .t`Defend yourself against advanced network-based attacks by routing your traffic through hardened servers`,
                    },
                    {
                        icon: NoLogsIcon,
                        alt: c('Image alt').t`No logs`,
                        title: c('Title').t`No Logs`,
                        about: c('About')
                            .t`Keep your browsing history private - we do not keep any records of our users' online activity`,
                    },
                    {
                        icon: KillSwitchIcon,
                        alt: c('Image alt').t`Kill switch to prevent IP exposure`,
                        title: c('Title').t`Kill Switch`,
                        about: c('About').t`Keep your data secure even if you are disconnected from your VPN server`,
                    },
                    {
                        icon: DNSIcon,
                        alt: c('Image alt').t`DNS leak prevention`,
                        title: c('Title').t`DNS leak prevention`,
                        about: c('About')
                            .t`Prevent your DNS requests from revealing your browsing history by encrypting all your DNS queries`,
                    },
                    {
                        icon: EncryptionIcon,
                        alt: c('Image alt').t`Strong encryption`,
                        title: c('Title').t`Strong encryption`,
                        about: c('About')
                            .t`Defend your Internet connection with AES-256, the highest strength encryption.`,
                    },
                ].map(({ icon, alt, title, about }) => (
                    <figure key={title} className="shadow-container w30 mb2 bg-white color-global-altgrey p1">
                        <img src={icon} alt={alt} className="redeem-promo-img center mt1 mb1" />
                        <figcaption>
                            <h2>{title}</h2>
                            <p>{about}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    </PublicPage>
);

RedeemContainer.propTypes = {
    history: PropTypes.object,
};

export default RedeemContainer;
