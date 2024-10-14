import React from 'react';

const Header = () => {
  return (
    <header style={{
      position: 'fixed', // スクロールしても画面上に固定
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      textAlign: 'left',
      fontSize: '20px',
      zIndex: 1000, // ヘッダーを最前面に表示
    }}>
      Direct AI Interaction
    </header>
  );
};

export default Header;
