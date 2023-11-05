import React from "react";

function Page({ title, children }: { title: string; children?: any }) {
  return (
    <>
      <h1>{title}</h1>
      <a href="https://ppx-poc-t2rlr4u5ea-ey.a.run.app/">
        <button>GCP-hosted nextJS POC</button>
      </a>
      <h3>review the same POC below:</h3>
      <iframe
        src="https://ppx-poc-t2rlr4u5ea-ey.a.run.app/"
        style={{position: 'absolute' ,width: '100%', height: '100%'}}>
      </iframe>
      {typeof children === "string" ? <pre>{children}</pre> : children}
    </>
  );
}

export default Page;