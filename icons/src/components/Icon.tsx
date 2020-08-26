import React, { FunctionComponent } from "react";
import * as Icons from "../generated";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name?: string;
}

type IconFC = FunctionComponent<React.SVGProps<SVGSVGElement>>;

const Icon: FunctionComponent<IconProps> = ({ name, ...rest }) => {
  const Icon = (Icons as { [key: string]: IconFC })[name];
  return <Icon {...rest} />;
};

export default Icon;
