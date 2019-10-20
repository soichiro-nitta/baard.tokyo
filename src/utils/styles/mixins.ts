const mixins = {
  relative: `
    position: relative;
    width: 100%;
    height: 100%;
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  absoluteCenter: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  `,
  fixedCenter: `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
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
