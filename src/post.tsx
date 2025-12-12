interface PostProps {
  author?: string;
  content?: string;
}

export function Post({ author, content }: PostProps) {
  return (
    <div>
      <strong>{author ?? "Unknown Author"}</strong>
      <p>{content ?? "No content available."}</p>
    </div>
  );
}
