import styled, {css} from "styled-components";

export function LoadingIndicator({size = "4em", color = "black"}) {
    return (
        <Container>
            <LoadingIcon size={size} color={color}>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
            </LoadingIcon>
        </Container>
    );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingIcon = styled.div`
  ${({size, color}) => css`
    --loading-icon-size: ${size};
    --loading-indicator-color: ${color}; 
  `}
  
  display: inline-block;
  position: relative;
  width: var(--loading-icon-size);
  height: var(--loading-icon-size);
  --loading-icon-internal-size: calc(var(--loading-icon-size) * 0.8);
  --loading-icon-border-size: calc(var(--loading-icon-size) / 10);
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: var(--loading-icon-internal-size);
    height: var(--loading-icon-internal-size);
    border: var(--loading-icon-border-size) solid var(--loading-indicator-color);
    border-radius: 50%;
    animation: lds-ring 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--loading-indicator-color) transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;