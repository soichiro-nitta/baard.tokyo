const sizes = {
  desktop: {
    dashboard: (): number =>
      sizes.phone.dashboard +
      1 +
      sizes.phone.dashboard * 1.5 +
      1 +
      sizes.phone.dashboard * 1.5,
    main: (): number =>
      sizes.phone.dashboard * 2.5 +
      1 +
      sizes.phone.dashboard * 2.5 +
      1 +
      sizes.phone.dashboard * 2.5,
    container: (): number =>
      1 +
      sizes.desktop.dashboard() +
      1 +
      sizes.desktop.main() +
      1 +
      sizes.desktop.dashboard() +
      1
  },
  tablet: {},
  phone: {
    dashboard: 61,
    scrollbar: 20,
    base: (): number => (sizes.phone.dashboard - sizes.phone.scrollbar) / 2
  },
  mq: {
    large: 955.5
  }
}

export default sizes
