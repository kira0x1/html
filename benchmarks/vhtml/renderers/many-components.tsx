import h from 'vhtml';

export function ManyComponents(name: string) {
  for (let i = 0; i < 10000; i++) {
    <div>{name}</div>;
  }

  return <div>{name}</div>;
}
