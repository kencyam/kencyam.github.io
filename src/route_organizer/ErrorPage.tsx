import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>
        The page you are trying to access does not exist or is not available.
      </p>
    </div>
  );
}
