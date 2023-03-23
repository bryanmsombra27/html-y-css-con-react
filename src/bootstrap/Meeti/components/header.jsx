const Header = () => {
  return (
    <>
      <div className="container-xl header">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <img
              src="/img-meeti/logo.png"
              alt="meeti"
              className="header__logo"
            />

            <h1 className="meeti-title display-2 fw-bold">
              Unete la vida esta en un Meeti
            </h1>

            <p className="fw-3 ">
              Unete a mas de 30 mil organizadores que estan compartiendo su
              pasion y construyendo una comunidad
            </p>
            <a href="" className="btn btn-danger">
              Inicia un grupo
            </a>
          </div>
          <div className="col-md-6">
            <img
              src="/img-meeti/imagen1.jpg"
              alt="imagen header"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
