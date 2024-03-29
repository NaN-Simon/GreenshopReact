declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
 }
 declare module "*.png" {
  const value: any;
  export default value;
 }
 declare module "*.jpg" {
  const value: any;
  export default value;
 }
 declare module 'react-router-hash-link';
 declare module 'slick-carousel';