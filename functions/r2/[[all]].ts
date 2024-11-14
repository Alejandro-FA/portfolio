interface Env {
  R2: R2Bucket;
}

const ALLOW_LIST = ["alejandro_fernandez_cv-en.pdf"];

function authorizeRequest(key: string) {
  return ALLOW_LIST.includes(key);
}

export const onRequestHead: PagesFunction<Env> = (context) => {
  const path = new URL(context.request.url).pathname.replace("/r2/", "");

  return authorizeRequest(path)
    ? new Response(null, { status: 200 })
    : new Response(null, { status: 404 });
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const path = new URL(context.request.url).pathname.replace("/r2/", "");

  if (!authorizeRequest(path)) {
    return new Response(null, { status: 404 });
  }

  const file = await context.env.R2.get(path);
  if (file == null) return new Response(null, { status: 404 });
  const response = new Response(file.body);
  if (file.httpMetadata?.contentType != null)
    response.headers.set("Content-Type", file.httpMetadata.contentType);
  return response;
};
