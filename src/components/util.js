import { useNavigate, useParams, useLocation } from "react-router-dom";

//using my withRouter to get paramter.
const withRouter = (WrappedComponent) => (props) => {
  const passed_params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={passed_params}
      navigate={navigate}
      location={location}
    />
  );
};

export default withRouter;
