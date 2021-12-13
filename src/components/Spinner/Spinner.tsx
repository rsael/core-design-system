import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const StyledSpinner = styled.div(() => [
	tw`inline-block w-5 h-5 border-b-2 border-l-2 rounded-full animate-spin`,
]);

const Spinner = (): JSX.Element => {
	return (
		<StyledSpinner />
	);
};

export default Spinner;
