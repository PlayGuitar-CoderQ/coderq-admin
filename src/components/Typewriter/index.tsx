import React, { FC } from 'react';
import { TypeProps } from './prop';

const Typewriter: FC<TypeProps> = (props: TypeProps) => {
  return (
    <div className={props.pClassName}>
      <span>{props.pText}</span>
      <div className={props.spanClassName}>{props.spanText}</div>
    </div>
  );
};

export default Typewriter;
