import { useState } from "react";
import styled from "styled-components";

import iconSlider from "../assets/icon-slider.svg";

const sliderBackground = "hsl(174, 86%, 45%)";
const sliderBarColorActive = "hsl(174, 77%, 80%)";
const sliderBarColorEmpty = "hsl(224, 65%, 95%)";

export default function Slider() {
  const [value, setValue] = useState(50);

  return (
    <StyledSlider
      type="range"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="mx-auto mb-6 w-full max-w-[27.75rem] cursor-grab active:cursor-grabbing"
    />
  );
}

const StyledSlider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 0.5rem;
  border-radius: 100vmax;
  outline: 0;
  border: 0;
  background: ${(props) =>
    `linear-gradient(to right, ${sliderBarColorActive} 0%, ${sliderBarColorActive} ${props.value}%, ${sliderBarColorEmpty} ${props.value}%, ${sliderBarColorEmpty} 100%)`};

  &:hover::-webkit-slider-thumb {
    background-color: #7aeadf;
  }

  &:hover::-moz-range-thumb {
    background-color: #7aeadf;
  }

  &:active::-webkit-slider-thumb {
    background-color: #24aea1 !important;
  }

  &:active::-moz-range-thumb {
    background-color: #24aea1 !important;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${sliderBackground};
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 0;
    -webkit-box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    -moz-box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    transition: background-color 0.1s linear;
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${sliderBackground};
    background-image: url(${iconSlider});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    border: 0;
    -webkit-box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    -moz-box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    box-shadow: 0px 1rem 1rem 0px ${sliderBarColorActive};
    transition: background-color 0.1s linear;
  }
`;
