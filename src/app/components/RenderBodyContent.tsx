
import { skinCardDetailType } from "@/types/skincardtype";
import { PortableText } from "@portabletext/react";

const RenderBodyContent = ({ post }: { post: skinCardDetailType  }) => {
  return (
    <>
      <PortableText value={post?.longPost as any}  />
    </>
  );
};

export default RenderBodyContent;