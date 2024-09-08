import supabase from "@/utils/supabase";
import ProjectCard from "@/components/ProjectCard";
import { getClient } from "@/configs/apolloClient";
import { GET_PROJECTS } from "@/graphql/query";

export const metadata = {
  title: "Projects | Daffa Damar",
  description: "Some of the projects that Daffa Damar has worked on",
};

export const revalidate = 5;

interface Tech {
  name: string;
  icon: string;
}

interface Projects {
  id: string;
  description: string;
  image_url: string;
  title: string;
  tech: Array<Tech>;
  project_url: string;
  repository_url: string;
}

export default async function Projects() {
  const { data, loading } = await getClient().query({ query: GET_PROJECTS });

  if (loading) return <p>Loading...</p>;

  return (
    <main className="container flex">
      <div className="flex flex-col py-12 gap-5 w-full items-center">
        <h1>My Projects</h1>
        {data.projects.tech}
        <div className="flex gap-12 flex-wrap justify-center">
          {data ? (
            data.projects.map(
              ({
                id,
                image_url,
                title,
                description,
                tech,
                project_url,
                repository_url,
              }: Projects) => {
                return (
                  <ProjectCard
                    key={id}
                    image_url={image_url}
                    title={title}
                    description={description}
                    tech={tech}
                    project_url={project_url}
                    repository_url={repository_url}
                  />
                );
              }
            )
          ) : (
            <div className="min-h-[74vh] flex flex-col gap-5 items-center justify-center">
              <h1 className="text-center">
                Sorry, I forgot to refresh the database :D
              </h1>
              <div className="flex gap-5 items-center">
                You can check my Github →
                <a href="https://github.com/daffadmr">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="98"
                    height="96"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
