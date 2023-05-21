import sprite from '../../images/symbol-defs.svg';

export const Icon = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};