"use client";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export default function AuthComponent() {
  const responseGoogle = (response: any) => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${response.credential}`,
        "Content-Type": "application/json",
        access_token: `${response.credential}`,
      },
      body: JSON.stringify({
        token: response.credential,
      }),
    };
    return fetch(
      `${process.env.BACKEND}/api/v1/social_auth/callback`,
      requestOptions
    )
      .then(async (response) => {
        const resp = await response.json();
        localStorage.setItem("autData", JSON.stringify(resp.headers));

        setTimeout(() => {
          location.replace("/");
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <div>
        <GoogleLogin
          height="10"
          width="500px"
          backgroundColor="#4285f4"
          access="offline"
          scope="email profile"
          onSuccess={responseGoogle}
          // @ts-ignore
          onError={responseGoogle}
          useOneTap={false}
          size="large"
        />
      </div>
    </GoogleOAuthProvider>
  );
}