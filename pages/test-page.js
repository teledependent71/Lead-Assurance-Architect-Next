import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Lead Assurance Architect</title>
          <meta
            property="og:title"
            content="test-page - Lead Assurance Architect"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_d6xfjf) => (
            <>
              <h1>{context_d6xfjf?.Name}</h1>
            </>
          )}
          initialData={props.contextD6xfjfProp}
          persistDataDuringLoading={true}
          key={props?.contextD6xfjfProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextD6xfjfProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextD6xfjfProp: contextD6xfjfProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
