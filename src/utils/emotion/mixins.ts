const mixins = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  lhCrop: (lineHeight: number): string => {
    return `
      display: inline-block;
      line-height: ${lineHeight};
      &:before {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-top: calc((1 - ${lineHeight}) * 0.5em);
      }
      &:after {
        content: '';
        display: block;
        height: 0;
        width: 0;
        margin-bottom: calc((1 - ${lineHeight}) * 0.5em);
      }
    `
  }
}
export default mixins
export type MixinsTypes = typeof mixins
