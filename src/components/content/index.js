export const Content = ({ children, style }) => {
  return (
    <p
      style={{
        fontStyle: "normal",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "28px",
        textAlign: "center",
        color: "#526A7E",
        width: "80%",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </p>
  );
};
