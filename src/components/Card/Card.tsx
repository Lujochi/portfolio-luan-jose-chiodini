import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="Card">{children}</div>;
};
