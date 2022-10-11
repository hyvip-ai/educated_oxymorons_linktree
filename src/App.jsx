import { useState } from 'react';
import LinkBlock from './components/LinkBlock';
import Share from './components/Share';
import Us from './components/Us';

function App() {
  const [links] = useState([
    {
      id: 0,
      label: 'Instagram',
      link: 'https://www.instagram.com/educated_oxymorons/',
      className: 'purple',
    },
    {
      id: 1,
      label: 'YouTube',
      link: 'https://www.youtube.com/channel/UCVQQZkF4Tbkw4JJLgtcEKag',
      className: 'yellow',
    },
    {
      id: 2,
      label: 'Facebook',
      link: 'https://www.facebook.com/educatedoxymorons',
      className: 'green',
    },
    {
      id: 3,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/educated-oxymorons/',
      className: 'blue',
    },
  ]);

  return (
    <>
      <Us />
      <Share />
      <div className='links'>
        {links.map((item) => (
          <LinkBlock {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default App;
