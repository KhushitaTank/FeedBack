import PropTypes from "prop-types";

export default function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}
Card.defaultProps = {
  reverse: false,
};

Card.protoTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
