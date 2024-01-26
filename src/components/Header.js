/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { baseBgColor, baseTxtColor } from '../App';

const Header = (props) => {
  return (
    <header
      css={css`
        background-color: ${baseBgColor};
      `}
    >
      <h1>
        <a
          css={css`
            color: ${baseTxtColor};
          `}
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
};

export default Header;
