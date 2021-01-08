import React from "react";

const OAuthForm = (props) => (
	<form method="get" action="/auth/google">
		<button type="submit" className="form-button">
			{props.authMethod} with Google
		</button>
	</form>
);

export default OAuthForm;
