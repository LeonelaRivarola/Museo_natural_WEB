export function ExternalLink({ href, ...rest }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
}