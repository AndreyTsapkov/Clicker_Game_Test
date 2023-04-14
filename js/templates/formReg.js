const formReg = () => {
  return `<div class="modal regModal">
                <h2 class="modal_subtitle regModal_subtitle">
                    Welсome!
                </h2>
                <h3 class="modal_title">Please, sign up for playing</h3>
                <form class="regModal_form" id="form">
                    <div  class="regModal_formfield">
                        <label  >
                        Name:
                        <input  type="text" name="name" placeholder="Your name">
                        </label>
                    </div>
                    <div  class="regModal_formfield">
                        <label >
                        e-mail:
                        <input type="email" name="email" placeholder="Your e-mail" required>
                        </label>
                    </div>
                    <div  class="regModal_formfield">
                        <label >
                        Password:
                        <input type="password" name="password" placeholder="Your password" required>
                        </label>
                    </div>
                    
                    <div>
                        <button type="button" class="button button__modal-submit">Register</button>
                    </div>
                    <div class="error__message is-hidden">
                        Please, fill all fields
                    </div>
                </form>`;
};

export default formReg;
