import React from 'react';
import { useStyletron } from 'baseui';

function Footer() {
  const [css] = useStyletron();
  return (
    <footer className={css({
      height: '200px',
      backgroundColor: '#3D3026',
    })}
    >
      This is the footer
    </footer>
  );
}

export default Footer;
