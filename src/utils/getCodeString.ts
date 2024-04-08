import buttonText from "@/docks/components/button/buttonDemo.md";
import simpleCardText from "@/docks/components/cards/simpleCard/simpleCardDemo.md";
import { registry } from "@/registry/registry";
const codeStrings: { [key: string]: string } = {
  "button-demo": buttonText,
  "simpleCard-demo": simpleCardText,
};

export const getCodeStringByName = (
  name: keyof typeof registry
): string | undefined => {
  return registry[name].code;
};
// import buttonText from "@/docks/components/button/buttonDemo.md";
// import simpleCardText from "@/docks/components/cards/simpleCard/simpleCardDemo.md";
// const codeStrings: { [key: string]: string } = {
//   "button-demo": buttonText,
//   "simpleCard-demo": simpleCardText,
// };

// export const getCodeStringByName = (name: string): string | undefined => {
//   return codeStrings[name];
// };
