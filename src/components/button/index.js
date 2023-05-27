export const CustomButton = ({ children }) => {
  return (
    <button
      style={{
        background: "#00ACFF",
        borderRadius: "50px",
        outline: "none",
        border: "none",
        width: "145px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "15px",
          lineHeight: "15px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        {children}
      </span>
    </button>
  );
};
