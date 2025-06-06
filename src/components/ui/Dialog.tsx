import React from "react";

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
  ...props
}) => {
  if (!open) return null;
  return (
    <div {...props}>
      <div
        onClick={() => onOpenChange(false)}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)" }}
      />
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "50%",
          width: "500px", // medium size
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflowY: "auto",
          transform: "translate(-50%, -50%)",
          background: "white",
          borderRadius: 8,
          padding: 24,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const DialogContent: React.FC<DialogContentProps> = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;
