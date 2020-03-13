import React from 'react'

import BlogRoll from '../../components/BlogRoll'
import Layout from "../../components/layout";
import SEO from "../../components/seo";


export default class DayZeroIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Day Zero - itsacoleworld" />
        <h1>Day Zero</h1>
        <p>There are tons of stories out there detailing startup success and failure, however, I've found that most of these stories are recollections.
            They are written after a startup has succeeded or failed and tend to cover only a few large events.
            You don't get exposure to the day-to-day, the highs, the lows.
            Partially inspired by <a href="https://twitter.com/suhail/status/1112970313329852418?s=21">Suhail's twitter thread</a>,
            I'm attempting to give a real-time view into what building a startup is like by documenting my thoughts, triumphs, and set backs each day.
            My hope is that one day this may help a fellow founder who is facing the same existential questions I did.
            At the least, it will provide a good place for me to practice my writing and store my thoughts.</p>
            <section style={{
                padding: `2rem 0`,
                }}
            >
              <div className="content">
                <BlogRoll />
              </div>
            </section>
      </Layout>
    )
  }
}