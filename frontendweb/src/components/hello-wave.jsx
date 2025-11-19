export function HelloWave() {
  return (
    <span
      style={{
        fontSize: 28,
        lineHeight: '32px',
        marginTop: -6,
        animation: 'wave 1.2s infinite',
        display: 'inline-block',
      }}
    >
      👋
    </span>
  );
}