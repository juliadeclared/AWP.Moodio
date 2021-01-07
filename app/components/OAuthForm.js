import React from "react";

const OAuthForm = () => (
	<form method="get" action="/auth/google">
		<button type="submit" className="form-button">
			Login with Google
		</button>
	</form>
);

export default OAuthForm;
