import type {GetServerSidePropsContext} from "next";
import LAZY_PAGES from "../components/pages";
import client from "../apollo-client";
import gql from "graphql-tag";

interface CurrentPageProps {
    componentName: string,
    componentProps: any
}

export default function CurrentPage({ componentName, componentProps }: CurrentPageProps) {
    // @ts-ignore
    const Component = LAZY_PAGES[componentName];
    if (!Component) {
        return <h1>Component {componentName} not found</h1>;
    }
    return <Component {...componentProps} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const url = context.req.url
    const pageData = await client.query({
      query: gql`
        query Page($url: String!) {
            page (urlPath: $url) {
                id
                url
                pageType
            }
        }
      `,
        variables: {
            url
        }
    })
    const componentName = pageData.data.page.pageType

    const propsForCurrentPage: CurrentPageProps = {
        componentName,
        componentProps: pageData.data.page
    }
    
    return {
        props: propsForCurrentPage
    }
}