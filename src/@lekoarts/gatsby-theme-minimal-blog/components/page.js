/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import Layout from "./layout";

// type PageProps = {
//   data: {
//     page: {
//       title: string
//       slug: string
//       excerpt: string
//       body: string
//     }
//   }
//   [key: string]: any
// }

const Page = ({ data: { page } } /*PageProps*/) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    {/* <Heading variant="styles.h2">{page.title}</Heading> */}
    <section sx={{ my: 3, variant: `layout.content` }}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Page;
