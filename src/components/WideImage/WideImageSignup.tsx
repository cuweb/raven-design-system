import { Button } from '../Button/Button';
import './WideImageSignup.scss';

export interface WideImageSignupProps {
    buttonText?: string;
}

export const WideImageSignup = ({ buttonText = 'Subscribe' }: WideImageSignupProps) => {
    return (
        <div className="cu-wideimage__signup">
            <div className="cu-wideimage__signup-row">
                <label htmlFor="cu-wideimage-email" className="sr-only">
                    Enter your email address
                </label>
                <input
                    type="email"
                    id="cu-wideimage-email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="cu-wideimage__signup-input"
                />
                <Button title={buttonText} />
            </div>
            <div className="cu-wideimage__signup-optin">
                <input
                    type="checkbox"
                    id="cu-wideimage-optin"
                    name="optin"
                    value="yes"
                    className="cu-wideimage__signup-checkbox"
                />
                <label htmlFor="cu-wideimage-optin" className="cu-wideimage__signup-label">
                    I agree to receive email from Carleton University. Read our{' '}
                    <a
                        href="https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Statement
                    </a>
                    .
                </label>
            </div>
        </div>
    );
};

WideImageSignup.displayName = 'WideImage.Signup';
