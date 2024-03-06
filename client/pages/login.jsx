import "../css/login.css";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLogin } from "../lib/fetchAPI";
import { attemptLogin } from "../lib/postAPI";

function LoginCallback({ reload, config }) {
  const { provider } = useParams();
  const [error, setError] = useState();

  useEffect(async () => {
    const { access_token, error, error_description, state, code } =
      Object.fromEntries(
        new URLSearchParams(window.location.hash.substring(1))
      );

    if (error || error_description) {
      setError(`Error: ${error} (${error_description})`);
      return;
    }

    if (!access_token) {
      setError("Missing access_token");
      return;
    }

    const loggingIn = await attemptLogin(provider, { access_token });
    if (loggingIn.login === "success") {
      if (loggingIn.first_login) {
        location.href = "/editConsent";
      } else {
        location.href = "/";
      }
    }
    //reload();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error.toString()}</div>
      </div>
    );
  }

  return <h1>Please wait...</h1>;
}

export function Login() {
  const { data, error, loading, reload } = useLoading(fetchLogin);

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }
  if (loading) {
    return <div>Please wait...</div>;
  }

  return (
    <div>
      <Routes>
        <Route
          path={"/"}
          element={
            <div>
              <h1 className={"login-header"}>Login</h1>
              <LoginButton
                config={data.config}
                label={"Login with Google"}
                provider={"google"}
              />
            </div>
          }
        />
        <Route
          path={"/:provider/callback"}
          element={<LoginCallback config={data.config} reload={reload} />}
        />
      </Routes>
    </div>
  );
}

function LoginButton({ config, label, provider }) {
  async function handleLogin() {
    const { authorization_endpoint, response_type, scope, client_id } =
      config[provider];

    const parameters = {
      response_type,
      response_mode: "fragment",
      client_id,
      scope,
      redirect_uri: `${window.location.origin}/login/${provider}/callback`,
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(parameters);
  }

  return (
    <div className={"login-div"}>
      <button
        id={"google-login-btn"}
        className={"button"}
        onClick={handleLogin}
      >
        {label}
      </button>
    </div>
  );
}

function useLoading(loadingFunction, deps = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  async function load() {
    try {
      setLoading(true);
      setData(await loadingFunction());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, deps);

  return { loading, error, data, reload: load };
}
