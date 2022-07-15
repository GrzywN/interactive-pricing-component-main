import styled from "styled-components";
import PropTypes from "prop-types";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  left: -100vmax;

  &:focus-visible + label {
    background-color: hsl(174, 86%, 45%);
  }

  &:checked + label::before {
    transform: translateX(1.5625rem) translateY(-50%);
  }
`;

const Label = styled.label.attrs({ type: "checkbox" })`
  cursor: pointer;

  position: relative;
  display: block;

  width: 2.6875rem;
  height: 1.375rem;
  border-radius: 100vmax;

  background-color: hsl(223, 50%, 87%);
  transition: background-color 0.2s linear;

  &:hover {
    background-color: hsl(174, 86%, 45%);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(0.25rem) translateY(-50%);
    transition: transform 0.2s linear;

    width: 0.875rem;
    height: 0.875rem;
    border-radius: 100vmax;
    background-color: white;
  }
`;

export default function Switch({ domId }) {
  return (
    <div>
      <Checkbox type="checkbox" id={domId} />
      <Label htmlFor={domId}></Label>
    </div>
  );
}

Switch.propTypes = {
  domId: PropTypes.string.isRequired,
};
