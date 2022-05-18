import React, { useEffect } from 'react'
import styled from 'styled-components'
import request from 'request-promise'
import useFetch from '../../hooks/useFetch'

interface Entry {
  id: string
  title: string
  link: string
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 40px;
`

// const Content = styled.div`
//   font-family: ${fonts};

//   h2 {
//     font-size: 24px;
//     line-height: 36px;
//     margin-top: 20px;
//     margin-bottom: 8px;
//   }

//   p {
//     font-size: 16px;
//     line-height: 24px;
//     margin-bottom: 8px;
//   }

//   div {
//     margin-bottom: 20px;
//   }
// `

const Home: React.FC = () => {
  const url = `${process.env.REACT_APP_BASE_URL}taskContext.c.c=PRO+BLISTREV&mainSearchCriteria.v.c=k58.9&mainSearchCriteria.v.cs=2.16.840.1.113883.6.90&mainSearchCriteria.v.ot=Irritable+Bowel+Syndrome&mainSearchCriteria.v.dn=IBS&subTopic.v.cs=2.16.840.1.113883.6.177&subTopic.v.c=Q000628&subTopic.v.dn=treatment&holder.assignedEntity.n=${process.env.REACT_APP_USERNAME}&holder.assignedEntity.certificateText=${process.env.REACT_APP_PASSWORD}&knowledgeResponseType=text/xml`

  const { data, loading } = useFetch(url)

  // useEffect(() => {
  //   if (data) {
  //     const parser = new DOMParser()
  //     const xmlDoc = parser.parseFromString(data, 'text/html')

  //     const entryList: Entry[] = []
  //     const entries = xmlDoc.getElementsByTagName('entry')

  //     Array.from(entries).forEach((element) => {
  //       entryList.push({
  //         id: element.getElementsByTagName('id')[0].innerHTML,
  //         title: `<h2>${element.getElementsByTagName('title')[0].innerText}</h2>`,
  //         summary: element.getElementsByTagName('summary')[0].innerText,
  //         link: element.getElementsByTagName('link')[0].innerHTML,
  //       })
  //     })

  //     setContent(entryList)
  //   }
  // }, [data])

  const returnXMLAsJSON = (xml: string): Entry[] => {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xml, 'text/html')

    const entryList: Entry[] = []
    const entries = xmlDoc.getElementsByTagName('entry')

    Array.from(entries).forEach((element) => {
      entryList.push({
        id: element.getElementsByTagName('id')[0].innerHTML,
        title: element.getElementsByTagName('title')[0].innerText,
        link: element.getElementsByTagName('link')[0].href,
      })
    })

    return entryList
  }

  useEffect(() => {
    if (data) {
      const entries = returnXMLAsJSON(data)

      const urlToFetch = entries[0].link

      request(urlToFetch, (error, response, html) => {
        if (!error && response.statusCode === 200) {
          console.log(html)
        }
      })
    }
  }, [data])

  useEffect(() => {}, [data])

  // const renderContent =
  //   content &&
  //   content.map((item) => {
  //     const html = `${item.title}${item.summary}${item.link}`
  //     return <Content key={item.id} dangerouslySetInnerHTML={{ __html: html }} />
  //   })

  if (loading) {
    return <div>loading</div>
  }

  if (data) {
    return (
      <Wrapper>
        {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
        {/* {renderContent} */}
      </Wrapper>
    )
  }

  return <div>Something went wrong while loading the data</div>
}

export default Home
