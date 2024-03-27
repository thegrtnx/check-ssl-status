import React from "react";

interface Props {
	url: string;
}

const UrlSSLChecker: React.FC<Props> = ({ url }) => {
	const hasSSL = (url: string): boolean => {
		return url.startsWith("https://");
	};

	return (
		<div>
			<p>URL: {url}</p>
			<p>Has SSL: {hasSSL(url) ? "Yes" : "No"}</p>
		</div>
	);
};

export default UrlSSLChecker;
