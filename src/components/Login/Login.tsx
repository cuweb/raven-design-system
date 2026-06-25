import { Alert } from '../Alert/Alert';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import './styles.scss';

export interface LoginProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end';
  useSocial?: boolean;
  errorTitle?: string;
  errorDesc?: string;
  onClickHandler?: {
    default: () => void;
    google: () => void;
    linkedIn: () => void;
    twitter?: () => void;
  };
}

export const Login = ({
  align = 'center',
  useSocial = false,
  errorTitle,
  errorDesc,
  onClickHandler,
  ...rest
}: LoginProps) => (
  <div className={`cu-login cu-login--${align}`} {...rest}>
    <img
      className="cu-login__logo"
      src="https://cdn.carleton.ca/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg"
      alt="Logo of Carleton University"
    />
    {(errorTitle || errorDesc) && (
      <div className="cu-login__error">
        <Alert title={errorTitle ?? ''} content={errorDesc} type="error" />
      </div>
    )}
    <ButtonGroup>
      <Button title="Login with your Carleton account" onClick={onClickHandler?.default} isFull />
    </ButtonGroup>
    {useSocial && (
      <div className="cu-login__social">
        <p className="cu-login__social-label">Or login with one of the following:</p>
        <ButtonGroup>
          {onClickHandler?.google && (
            <Button title="Login with Google" color="white" onClick={onClickHandler.google} isFull />
          )}
          {onClickHandler?.linkedIn && (
            <Button title="Login with LinkedIn" color="white" onClick={onClickHandler.linkedIn} isFull />
          )}
          {onClickHandler?.twitter && (
            <Button title="Login with Twitter" color="white" onClick={onClickHandler.twitter} isFull />
          )}
        </ButtonGroup>
      </div>
    )}
  </div>
);
