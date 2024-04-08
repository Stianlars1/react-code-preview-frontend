// import Link from "next/link";
// import { useRef, useState } from "react";
// import { CardProps } from "../types/types";

// export const Card = ({ title, description, svg }: CardProps) => {
//   const cardRef = useRef<HTMLElement>(null);
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });

//   const handleMoveMouse = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     console.log("cardRef", cardRef);
//     if (cardRef.current !== null) {
//       const rect = cardRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       setCursor({ x, y });
//     }
//   };

//   const SvgAsset = value.assets?.Svg;
//   const widthAndHeight = value.assets?.widthAndHeight;
//   const showIllustrations = !!SvgAsset && !!widthAndHeight;

//   console.log("showIllustrations", showIllustrations);
//   console.log("SvgAsset", SvgAsset);
//   return (
//     <Link
//       ref={cardRef}
//       key={value.name}
//       className="landing-page-shortcuts__ul__card"
//       href={value.url}
//       onMouseMove={handleMoveMouse}
//     >
//       <>
//         <div className="shortcut-header">
//           <h2>{value.name}</h2>
//           <p>{value.description}</p>
//         </div>

//         {showIllustrations && (
//           <div
//             className="landing-page-shortcuts__ul__card__assets-wrapper"
//             style={{
//               width: `${widthAndHeight}px`,
//               height: `${widthAndHeight}px`,
//             }}
//           >
//             {/* <Image
//                   src={value.assets?.imagePath || ""}
//                   width={widthAndHeight}
//                   height={widthAndHeight}
//                   alt="get started - shuttle icon"
//                 /> */}
//             <SvgAsset
//               widthAndHeight={widthAndHeight}
//               cursor={cursor}
//               cardRef={cardRef}
//             />
//           </div>
//         )}
//       </>
//     </Link>
//   );
// };
