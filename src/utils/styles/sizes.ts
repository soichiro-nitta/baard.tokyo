const sizes = {
  desktop: {},
  tablet: {},
  phone: {
    dashboard: 61,
    scrollbar: 20,
    base: (): number => {
      return (sizes.phone.dashboard - sizes.phone.scrollbar) / 2
    }
  }
}
export default sizes
