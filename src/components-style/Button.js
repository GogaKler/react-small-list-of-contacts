import { css } from "styled-components";
import styled from "styled-components/macro";



export const Button = styled.button`
	border: 0;
	background-color: #4B51EF;
	color: #fff;
	padding: 5px 15px;
	font-size: 13px;
	margin: 5px 0;
	border-radius: 5px;
	transition: 0.40s ease-out;
	cursor: pointer;
	align-self: ${({ self }) => self || ''};
	margin: ${({margin}) => margin || ''};
	&:disabled{
		color: #fff;
		background: #AFAFAF;
	}

	${({ transparent }) => transparent && css`
		background: 0;
		color: #4B51EF;
			&:hover{
				background-color: #4b50ef75;
				color: #fff;
			}
	`}
	${({ green }) => green && css`
		background: #52CF4F;

	`}
	${({disabledBlue}) => disabledBlue && css`
			color: #d5d5d5;
			background: #6c6c6c;
			cursor: default;
	`}
	${({large}) => large && css`
			padding: 6px 20px;
			font-size: 16px;
	`}
`