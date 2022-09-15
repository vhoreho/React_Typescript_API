import { useState } from 'react'
import { Card } from './components/Card';
import { Form } from "./components/Form";
import { getReposFromGithub } from './service/getUser';
import { ReposVM } from './types/reposVM';

export function App() {
  const [repos, setRepos] = useState<ReposVM[]>([])

  const handleGetUsers = async (username: string) => {
    const repos = await getReposFromGithub(username);
    setRepos(repos)
  }

  return (
    <div className=" min-h-screen flex items-center py-6 w-3/4 mx-auto flex-col">
      <Form onGetUser={handleGetUsers} />
      <div className='pt-4 border-b-2 h-3 w-full mb-4'></div>
      {!repos.length && <h2>Repositories is empty</h2>}
      <div className='flex flex-wrap gap-4 justify-center'>
        {repos && repos.map(card => <Card key={card.id} data={card} />)}
      </div>
    </div>
  );
}
