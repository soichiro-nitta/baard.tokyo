const sizes = {
  desktop: {
    dashboard: 320,
    main: 550,
    container: 871
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
