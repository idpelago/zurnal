const WithLayout = (getLayout) => {
    return (Page) => {
        const Component = (props) => <Page {...props} />;

        Component.getLayout = getLayout;
        // Component.getInitialProps = Page.getInitialProps;
        // Component.getServerSideProps = Page.getServerSideProps;

        // Component.displayName = `withLayout(${Page.displayName || Page.name})`;

        return Component;
    };
}

export default WithLayout;