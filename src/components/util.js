import { useNavigate, useParams } from 'react-router-dom';

//using my withRouter to get paramter.
const withRouter = WrappedComponent => props => {
  const passed_params = useParams();
  const navigate = useNavigate();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={passed_params}
      navigate={navigate}
    />
  );
};

export default withRouter;