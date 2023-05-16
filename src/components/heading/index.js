export const Heading = ({ children, style }) => {
  return (
    <h2
      style={{
        fontSize: " 44px",
        fontWeight: "300",
        lineHeight: "54px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#183B56",
        textTransform: "capitalize",
        ...style,
      }}
    >
      {children}
    </h2>
  );
};
