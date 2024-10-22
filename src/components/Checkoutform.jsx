
import React, { useRef } from 'react';

const Checkoutform = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    
    if (!name) {
      alert("Por favor, ingrese su nombre.");
      nameRef.current.focus();
      return;
    }

    if (!email) {
      alert("Por favor, ingrese su correo electrónico.");
      emailRef.current.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      emailRef.current.focus();
      return;
    }

    alert('¡Gracias por tu compra,Hemos recibido su pedido, te enviaremos un correo de confirmacion en breve.');

    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <div className="container my-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" ref={nameRef} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" ref={emailRef} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Checkoutform;