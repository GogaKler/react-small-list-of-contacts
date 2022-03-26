import { css } from 'styled-components'
import styled, { createGlobalStyle }  from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html{
		overflow-x: hidden;
	}
	body{
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
		font-weight: normal;
		overflow-x: hidden;
	}
	li{
		list-style-type: none;
	}
	a:active, a:hover, a{
  text-decoration: none;
	}
	textarea{
		resize: none;
	}
	.AppWrapper{
		height: 100vh;
		background-color: #E5E5E5;
	}
`

export const Title = styled.h1`
	font-weight: 700;
	font-size: 20px;
	margin: ${({margin}) => margin || 0 };

	${({small}) => small && css`
		font-weight: normal;
		font-size: 16px;
	`}
	${({large}) => large && css`
		font-weight: 700;
		font-size: 26px;
	`}
`
export const Container = styled.div`
	width: 100%;
	max-width: 1170px;
	margin: 0 auto;
	padding: 0 15px;
`
export const FlexContainer = styled.div`
	display: flex;
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	align-self: ${({self}) => self || ''};
	flex-wrap: ${({fWrap}) => fWrap || ''};
	flex: ${({sFlex}) => sFlex || ''};
	margin: ${({margin}) => margin || 0 };
	padding: ${({padding}) => padding || 0 };
	width: ${({sWidth}) => sWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	cursor: ${({cursor}) => cursor || ''};
`
export const FlexCol = styled.div`
	flex: ${({flex}) => flex || '1 0 50%'};
	align-items:  ${({align}) => align || 'stretch'};
	justify-content: ${({justify}) => justify || 'stretch'};
	flex-direction: ${({direction}) => direction || 'row'};
	flex-wrap: ${({fWrap}) => fWrap || 'wrap'};
	margin: ${({margin}) => margin || 0 };
	width: ${({width}) => width || ''};
	max-width: ${({maxWidth}) => maxWidth || ''};
	height: ${({sHeight}) => sHeight || ''};
	cursor: ${({cursor}) => cursor || ''};
`