const sizes = {
  desktop: {
    dashboard: 260,
    main: 500,
    container: 761
  },
  tablet: {},
  phone: {
    dashboard: 61,
    scrollbar: 20,
    base: (): number => (sizes.phone.dashboard - sizes.phone.scrollbar) / 2
  },
  mq: {
    large: 899
  }
}

export default sizes
