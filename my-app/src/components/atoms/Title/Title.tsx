import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITitle {
  title: string;
}

export const Title = memo(({ title }: ITitle) => <img src={title} />);
