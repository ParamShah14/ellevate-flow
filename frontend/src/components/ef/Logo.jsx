export const Logo = ({ light = false }) => (
  <img
    src={light ? "/img/logo-dark.png" : "/img/logo-light.png"}
    alt="EllevateFlow"
    className="h-9 w-auto sm:h-10"
    data-testid={light ? "footer-logo" : "navbar-logo"}
  />
);
