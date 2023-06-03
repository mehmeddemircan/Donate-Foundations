import { Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import AuthForm from "../forms/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { Login, register as _register } from "../../redux/actions/authActions";
import { message } from "antd";
const AuthModal = ({ showAuthModal, handleCloseAuthModal }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const auth = useSelector((state) => state.auth);
  const handleToggleRegister = () => {
    setShowRegister((prev) => !prev);
  };
  const dispatch = useDispatch();

  const userSignUp = () => {
    const user = { firstname, lastname, email, password };

    dispatch(_register(user));
  };

  const userLogin = (e) => {
    e.preventDefault();

    if (showRegister) {
      userSignUp();
    } else {
      dispatch(Login({ email, password }));
    }
  };

  // regiter true ise inputları temizle
  useEffect(() => {
    if (showRegister) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
    }
  }, [showRegister]);
  // başarılı şekilde giriş yaparsa anasayfaya yönlendir
  useEffect(() => {
    if (auth.authenticate) {
      handleCloseAuthModal();
    }
  }, [auth.authenticate,handleCloseAuthModal]);
  // authentication olurken hata mesajlarını göster
  useEffect(() => {
    if (!auth.authenticating && auth.error !== null && auth.token === null) {
      if (auth.error) {
        message.error(auth.error);
      }
    }
  }, [auth.authenticating, auth.error, auth.token]);

  return (
    <Fragment>
      <Modal
        footer={null}
        centered
        open={showAuthModal}
        onOk={handleCloseAuthModal}
        onCancel={handleCloseAuthModal}
      >
        <AuthForm
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showRegister={showRegister}
          handleToggleRegister={handleToggleRegister}
          userLogin={userLogin}
        />
      </Modal>
    </Fragment>
  );
};

export default AuthModal;
