import React, {FC, useCallback, useEffect, useState} from 'react';
import {Offers} from './containers/Offers';
import {resetToastMessage} from "./actions";
import {connect} from "react-redux";
import Toast from "./components/Toast";
import Header from "./components/Header";
import {IState} from "./common/types";

interface IProps {
  errorMessage: string;
  onResetToast: () => void;
}

const AppContainer: FC<IProps> = (props: IProps) => {
  const {errorMessage, onResetToast} = props;

  const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

  useEffect(() => {
    if (!showSnackBar && errorMessage) {
      setShowSnackBar(true);
    }
  }, [errorMessage, showSnackBar]);

  const handleCloseToast = useCallback(() => {
    setShowSnackBar(false);
    onResetToast();
  }, [onResetToast]);

  return (
        <>
          <Header />
          <Offers />
          <Toast open={showSnackBar} message={errorMessage} onClose={handleCloseToast} />
        </>
    );
}

const mapStateToProps = (state: IState) => ({
  errorMessage: state.toast.message,
});

const mapDispatchToProps = (dispatch: any) => ({
  onResetToast: () => dispatch(resetToastMessage()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
