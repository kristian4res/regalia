import styled from 'styled-components';

export const TextOverlay = styled.div`
    position: absolute;
    top: 25%;
    left: 15%;
    width: 700px;
    font-size: 90px;
    z-index: 9;
    color: white;
    background-color: rgba(28, 16, 32, 0.7);
    padding: 0.5em;
`;

export const SliderWrapper = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
    justify-content: space-evenly;
    padding: 70px;
`;

const Dot = styled.li`
  padding: 10px;
  margin-right: 5px;
  // cursor: pointer;
  border-radius: 50%;
  background: ${props => props.active ? 'black' : 'white'};
`;


export const Dots = ({ slides, activeIndex }) => (
    <ul
      style={{
        position: 'absolute',
        left: '0%',
        bottom: '2%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10',
        listStyle: 'none',
        padding: '0px',
        margin: '0px'
      }}
    >
      {slides.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} />
      ))}
    </ul>
)