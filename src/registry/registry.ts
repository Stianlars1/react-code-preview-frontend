import { ButtonCode, ButtonDemo } from "@/docks/components/button";
import {
  SimpleCardCode,
  SimpleCardDemo,
} from "@/docks/components/cards/simpleCard";
import { LoaderCode, LoaderDemo } from "@/docks/components/loader";

export interface registry {
  [key: string]: {
    component: () => JSX.Element;
    code: string;
  };
}
export const registry = {
  "button-demo": { component: ButtonDemo, code: ButtonCode },
  "simpleCard-demo": { component: SimpleCardDemo, code: SimpleCardCode },
  "loader-demo": { component: LoaderDemo, code: LoaderCode },
};
