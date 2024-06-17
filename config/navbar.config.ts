const navbar = {
  title: '이윤섭',
  logo: {
    alt: 'younseop lee Logo',
    src: '/img/favicon.svg',
    width: 32,
    height: 32,
  },
  items: [
    { to: '/s/archive', label: '작성글', position: 'left' as const },
    {
      href: 'https://github.com/devseop',
      position: 'right' as const,
      className: 'navbar-github-link',
      'aria-label': 'GitHub repository',
    },
  ],
};

export default navbar;
