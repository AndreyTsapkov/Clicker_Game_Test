import modalOpen from "./helpers/modalOpen.js";
import modalClose from "./helpers/modalClose.js";
import formReg from "./templates/formReg.js";
import refs from "./helpers/refs.js";

const user = JSON.parse(localStorage?.getItem("user"));

const renderModal = () => {
  refs.modalRegBackdrop.innerHTML = "";
  refs.modalRegBackdrop.insertAdjacentHTML("beforeend", formReg());
  const buttonSumbit = document.querySelector(".button__modal-submit");
  buttonSumbit.addEventListener("click", onFormSumbit);
};

const userData = {};

const onFormSumbit = (event) => {
  event.preventDefault;

  let checkForm = true;

  for (let field of form) {
    const { name } = field;

    if (name) {
      document.querySelector("error__message").classList.add("is-hidden");
      const { value } = field;
      userData[name] = value;
    }
  }

  if (
    userData.name.trim() === "" ||
    userData.email.trim() === "" ||
    userData.password.trim() === ""
  ) {
    checkForm = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(userData.email)) {
    checkForm = false;
  }

  if (!checkForm) {
    document.querySelector(".error_message").classList.remove("is-hidden");
  }
  if (checkForm) {
    refs.userName.textContent = `${userData.name}`;
    localStorage.setItem("user", JSON.stringify(userData));
    refs.userLogOut.classList.remove("is-hidden");
    modalClose(refs.modalRegBackdrop);
    document.querySelector(".error_message").classList.add("is-hidden");
    refs.userLogOut.addEventListener("click", onLogout);
  }
};

const onLogout = () => {
  localStorage.removeItem("user");
  refs.userName.textContent = `User`;
  refs.userLogOut?.classList.add("is-hidden");
  renderModal();
  modalOpen(refs.modalRegBackdrop);
};

if (!user) {
  renderModal();
  modalOpen(refs.modalRegBackdrop);
}

if (user) {
  refs.userLogOut.classList.remove("is-hidden");
  refs.userLogOut.addEventListener("click", onLogout);
}
