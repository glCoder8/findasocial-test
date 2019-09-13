import React from 'react'
import Head from 'next/head'
import { useQuery } from 'graphql-hooks'
import Nav from '../components/nav'
import Profile from '../components/profile'

const tempProfiles = [
  {
    name: 'Jurriaan van der Broek',
    id: '@rhia.officla',
    description: 'Hella narwhal Cosby sweater McSweeney\'s salvia kitsch before they sold out High Life.'
  }, {
    name: 'Mathew Lina',
    id: '@rhia.officla',
    description: 'Hella narwhal Cosby sweater McSweeney\'s salvia kitsch before they sold out High Life.'
  }, {
    name: 'Langke Zambo',
    id: '@rhia.officla',
    description: 'Hella narwhal Cosby sweater McSweeney\'s salvia kitsch before they sold out High Life.'
  }
];

export const profilesQuery = `
  query profiles($keyword: String!) {
    profiles(orderBy: createdAt_DESC) {
      id
      name
      description
    }
  }
`;

async function handleSubmit (event, onSubmission) {
  event.preventDefault();
  const form = event.target;
  const formData = new window.FormData(form);
  const keyword = formData.get('KEYWORD');
  form.reset();
  onSubmission && onSubmission(keyword);
}

const Home = () => {
  const { loading, error, data, refetch } = useQuery(profilesQuery, {
    variables: { keyword: '' },
    updateData: (prevResult, result) => ({
      ...result,
      profiles: [...prevResult.profiles, ...result.profiles]
    })
  });
  // const { profiles } = data;
  const profiles = [...tempProfiles];

  return (
    <div className="screen-container">
      <Head>
        <title>findasocial</title>
      </Head>

      <Nav />

      <div className="container">
        <h1 className='title'>The easist way to find<br/>Tik Tok influencers</h1>
        <p className='description'>
          Search a database of over 1.5M tiktok accounts in seconds
        </p>

        <form className="form-inline" onSubmit={event => handleSubmit(event, (keyword) => {
          refetch({ variables: { keyword: keyword } })
        })}>
          <input type="text" name="KEYWORD" placeholder="Enter keywords e.g. Canada, Fashion, Football" className="form-input-keyword"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>

        <p className='hint'>
          See stats for your account
        </p>

        <div className="section-profile">
          <Profile profile={profiles[0]}/>
          <Profile profile={profiles[1]} isCenterProfile={true} />
          <Profile profile={profiles[2]}/>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0px;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
      `}</style>
      <style jsx>{`
        .screen-container {
          background-color: black;
        }
        .container {
          display: block;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          color: white;
          padding-top: 100px;
        }
        .title {
          text-align: center;
        }
        .description {
          text-align: center;
        }
        .form-inline {
          display: flex;
          justify-content: center;
        }
        .form-input-keyword {
          font-size: 14px;
          background-color: black;
          padding: 10px 18px;
          border-color: #f32855;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          width: 300px;
          color: white;
        }
        .form-input-keyword:focus {
          outline: none;
        }
        .btn-primary {
          padding: 10px 18px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          background-color: #f32855;
          border-color: #f32855;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .hint {
          text-align: center;
          font-size: 12px;
        }
        .section-profile {
          display: flex;
          justify-content: center;
        }
        .profile-center {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Home
