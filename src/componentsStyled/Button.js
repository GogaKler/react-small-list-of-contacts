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

	${({ transparent }) => transparent && css`
		background: 0;
		color: #4B51EF;
			&:hover{
				background-color: #4b50ef75;
				color: #fff;
			}
	`}
`