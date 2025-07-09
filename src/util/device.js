const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const devices = {
  mobileS: `(width < ${sizes.mobileS})`,
  mobileM: `(width < ${sizes.mobileM})`,
  mobileL: `(width < ${sizes.mobileL})`,
  tablet: `(width < ${sizes.tablet})`,
  laptop: `(width < ${sizes.laptop})`,
  laptopL: `(width < ${sizes.laptopL})`,
  desktop: `(width < ${sizes.desktop})`,
  desktopL: `(width < ${sizes.desktop})`,
};

export default devices;
